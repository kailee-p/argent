export const searchControllers = {
  searchTickers: (input: string) => {
    return fetch('/.netlify/functions/searchTickers', {
      method: "POST",
      body: JSON.stringify(input)
    })
  }
}