export const companyInfoControllers = {
  getCompanyInfo: (ticker: string) => {
    return fetch('/.netlify/functions/getCompanyInfo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(ticker)
    })
  }
}