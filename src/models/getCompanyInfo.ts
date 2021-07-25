import { HandlerEvent } from '@netlify/functions'
import fetch from "node-fetch";
import { companyInfoAPIResponse, companyInfoError } from '../interfaces/companyInfoInterfaces';

exports.handler = async (event: HandlerEvent) => {
  //post request only
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'ERROR in getCompanyInfo Netlify function: Method Not Allowed'}
  }

  //retrieve ticker from post body
  const ticker = JSON.parse(event.body|| '');
  const getCompanyInfoEndpoint = `https://api.polygon.io/v1/meta/symbols/${ticker}/company?&apiKey=${process.env.POLYGON_API_KEY}`

  //fetch request to Polygon API for company information from ticker
  try {
    const response = await fetch(getCompanyInfoEndpoint);
    const companyInfoFromAPI: companyInfoAPIResponse | companyInfoError = await response.json();

    if ('error' in companyInfoFromAPI) { //if error message, send error to frontend
      return {
        statusCode: 404,
        body: JSON.stringify({ error: companyInfoFromAPI.error })
      }
    } else { //else, destructure relevant company info from API response and send to frontend
      const { 
        name, 
        symbol, 
        url,
        ceo,
        phone,
        hq_address,
        industry,
        employees,
        description
      } = companyInfoFromAPI;
      
      return {
        statusCode: 200,
        body: JSON.stringify({ 
          info: {
            name, 
            symbol, 
            url,
            ceo,
            phone,
            hq_address,
            industry,
            employees: Number(employees).toLocaleString(),
            description 
          }
        })
      }
    }
  } catch (err: unknown) {
    console.log('ERROR in getCompanyInfo Netlify function: ', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to get company info from API' })
    }
  }
};