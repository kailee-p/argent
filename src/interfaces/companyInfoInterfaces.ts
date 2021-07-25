export interface companyInfoAPIResponse {
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

export interface companyInfoError {
  error: string,
}

export interface companyInfoForDisplay {
  name: string,
  symbol: string,
  url: string,
  ceo: string,
  phone: string,
  hq_address: string,
  industry: string, 
  employees: string,
  description: string
}