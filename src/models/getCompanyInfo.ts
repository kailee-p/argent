import { HandlerContext, HandlerEvent } from '@netlify/functions'
import fetch from "node-fetch";

exports.handler = async (event: HandlerEvent, context: HandlerContext) => {
  //post request only
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "ERROR: Method Not Allowed"}
  }

  //retrieve ticker from post body
  const ticker = JSON.parse(event.body|| '');
  const getCompanyInfoEndpoint = `https://api.polygon.io/v1/meta/symbols/${ticker}/company?&apiKey=${process.env.POLYGON_API_KEY}`

  //fetch request to Polygon API for company information from ticker
  try {
    const response = await fetch(getCompanyInfoEndpoint);
    const companyInfo = await response.json();
    console.log(companyInfo);
  } catch (err: unknown) {
    console.log('ERROR in getCompanyInfo Netlify function: ', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to get company info from API' })
    }
  }
};