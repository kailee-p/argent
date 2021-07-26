import { HandlerEvent } from '@netlify/functions'
import fetch from "node-fetch";

exports.handler = async (event: HandlerEvent) => {
  //post request only
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'ERROR in getLastQuote Netlify function: Method Not Allowed'}
  }

  //retrieve ticker from post body
  const ticker = JSON.parse(event.body|| '');
  const getPrevDayInfoEndpoint = `https://api.polygon.io/v2/aggs/ticker/${ticker}/prev?adjusted=true&apiKey=${process.env.POLYGON_API_KEY}`

  //fetch request to Polygon API for previous day's open, high, low, and close (OHLC)
  try {
    const response = await fetch(getPrevDayInfoEndpoint);
    const prevDayInfo = await response.json();
    //destructure previous day info from API response
    const { c, h, l, o } = prevDayInfo.results[0];
    return {
      statusCode: 200,
      body: JSON.stringify({ //convert numbers to USD currency strings
        closePrice: `$${c.toFixed(2)}`,
        openPrice: `$${o.toFixed(2)}`,
        highestPrice: `$${h.toFixed(2)}`,
        lowestPrice: `$${l.toFixed(2)}`,
      })
    }
  } catch (err: unknown) {
    console.log('ERROR in getPrevDayInfo Netlify function: ', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to retrieve previous day information for stock' })
    }
  }
};