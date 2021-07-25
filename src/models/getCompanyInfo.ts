import { HandlerContext, HandlerEvent } from '@netlify/functions'
import fetch from "node-fetch";

interface companyInfoAPIResponse {
  active: boolean,
  bloomberg: string,
  ceo: string,
  cik: string,
  country: string,
  description: string,
  employees: number,
  exchange: string, 
  exchangeSymbol: string,
  figi: string | null,
  hq_address: string,
  hq_country: string,
  hq_state: string,
  industry: string,
  lei: string,
  listdate: string,
  logo: string,
  marketcap: number,
  name: string,
  phone: string,
  sector: string,
  similar: string[],
  symbol: string,
  tags: string[],
  type: string,
  updated: string,
  url: string,
}

interface companyInfoError {
  error: string,
}

exports.handler = async (event: HandlerEvent, context: HandlerContext) => {
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
    console.log(companyInfoFromAPI);

    if ('error' in companyInfoFromAPI) { //if error message, send error to frontend
      return {
        statusCode: 404,
        body: JSON.stringify({ companyInfoFromAPI })
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
        marketcap,
        employees,
        description
      } = companyInfoFromAPI;
      
      return {
        statusCode: 200,
        body: JSON.stringify({
          name, 
          symbol, 
          url,
          ceo,
          phone,
          hq_address,
          industry,
          marketcap,
          employees,
          description 
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