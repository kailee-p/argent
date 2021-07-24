import { HandlerContext, HandlerEvent } from '@netlify/functions'
import fetch from "node-fetch";

interface ticker {
  active: boolean,
  cik: string,
  composite_figi: string,
  currency_name: string,
  last_updated_utc: string,
  locale: string,
  market: string,
  name: string,
  primary_exchange: string,
  share_class_figi: string,
  ticker: string,
  type: string
}

interface tickerResponse {
  count: number,
  request_id: string,
  results: ticker[]
}

exports.handler = async (event: HandlerEvent, context: HandlerContext) => {
  //post request only
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "ERROR: Method Not Allowed"}
  }

  //retrieve search input from post body
  const input = event.body;
  const searchTickersEndpoint = `https://api.polygon.io/v3/reference/tickers?search=${input}&active=true&sort=ticker&order=asc&limit=1000&apiKey=${process.env.POLYGON_API_KEY}`

  //fetch request to Polygon API for tickers
  try {
    const response = await fetch(searchTickersEndpoint);
    const tickers: tickerResponse = await response.json();
    console.log(tickers);
    return {
      statusCode: 200,
      body: JSON.stringify({ tickers })
    }
  } catch (err: unknown) {
    console.log('ERROR in searchTickers: ', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to search tickers' })
    }
  }
};