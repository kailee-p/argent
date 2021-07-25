export const searchControllers = {
  searchTickers: (input: string) => {
    return fetch('/.netlify/functions/searchTickers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(input)
    })
  }
}