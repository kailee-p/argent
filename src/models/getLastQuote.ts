import { HandlerEvent } from '@netlify/functions'
import fetch from "node-fetch";

exports.handler = async (event: HandlerEvent) => {
  //post request only
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'ERROR in getLastQuote Netlify function: Method Not Allowed'}
  }

  //retrieve ticker from post body
  const ticker = JSON.parse(event.body|| '');
  const getLastQuoteEndpoint = `https://api.polygon.io/v2/last/nbbo/${ticker}?&apiKey=${process.env.POLYGON_API_KEY}`

  //fetch request to Polygon API for last quote of stock
  try {
    const response = await fetch(getLastQuoteEndpoint);
    const lastQuote = await response.json();
    console.log('lastQuote', lastQuote);
  } catch (err: unknown) {
    console.log('ERROR in getLastQuote Netlify function: ', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to retrieve last quote for stock' })
    }
  }
};