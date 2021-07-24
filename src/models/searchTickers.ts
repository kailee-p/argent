import { HandlerContext, HandlerEvent } from '@netlify/functions'
const queryString = require('query-string');

exports.handler = async (event: HandlerEvent, context: HandlerContext) => {
  //post request only
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "ERROR: Method Not Allowed"}
  }

  //retrieve search input from post body
  const input = event.body;

  return {
    statusCode: 200,
    body: JSON.stringify(input)
  }
};