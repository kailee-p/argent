import { HandlerCallback, HandlerContext, HandlerEvent } from '@netlify/functions'

exports.handler = function (event: HandlerEvent, context: HandlerContext, callback: HandlerCallback) {
  callback(null, {
    statusCode: 200,
    body: "Hello, World",
  });
};