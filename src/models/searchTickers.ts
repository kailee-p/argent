import { HandlerContext, HandlerEvent } from '@netlify/functions'
import fetch from "node-fetch";

exports.handler = async (event: HandlerEvent, context: HandlerContext) => {
  //post request only
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "ERROR: Method Not Allowed"}
  }

  //retrieve search input from post body
  const input = event.body;

  //fetch request to Polygon API for tickers
  fetch(`https://api.polygon.io/v3/reference/tickers?search=${input}&active=true&sort=ticker&order=asc&limit=10&apiKey=${process.env.POLYGON_API_KEY}`)
    .then(res => res.json())
    .then(searchResults => console.log(searchResults))

  return {
    statusCode: 200,
    body: JSON.stringify(input)
  }
};