export const stockInfoControllers = {
  getLastQuote: (ticker: string) => {
    return fetch('/.netlify/functions/getLastQuote', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(ticker)
    })
  }
}