export const searchControllers = {
  searchTickers: () => {
    fetch('/.netlify/functions/searchTickers', {
      method: "POST",
      body: JSON.stringify("Microsoft")
    })
      .then(res => res.json())
      .then(res => console.log(res));
  }
}