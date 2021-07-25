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

interface tickerAPIResponse {
  count: number,
  request_id: string,
  results: ticker[]
}

exports.handler = async (event: HandlerEvent, context: HandlerContext) => {
  //post request only
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'ERROR in searchTickers Netlify function: Method Not Allowed'}
  }

  //retrieve search input from post body
  const input = JSON.parse(event.body || '');
  const searchTickersEndpoint = `https://api.polygon.io/v3/reference/tickers?search=${input}&active=true&sort=ticker&order=asc&limit=10&apiKey=${process.env.POLYGON_API_KEY}`

  //fetch request to Polygon API for tickers
  try {
    const response = await fetch(searchTickersEndpoint);
    const tickers: tickerAPIResponse = await response.json();

    //create array of only ticker symbol and company name from results for searchbar dropdown
    const nameAndTickerArr: string[] = [];
    if (tickers.results !== null) {
      tickers.results.forEach(ticker => nameAndTickerArr.push(`${ticker.ticker}: ${ticker.name}`));
    }

    //send array of tickers and company names to search bar frontend
    return {
      statusCode: 200,
      body: JSON.stringify({ nameAndTickerArr })
    }
  } catch (err: unknown) {
    console.log('ERROR in searchTickers Netlify function: ', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to search tickers' })
    }
  }
};