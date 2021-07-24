import React from 'react';
import AsyncSelect from 'react-select/async';

const SearchBar = () => {

  fetch('/.netlify/functions/searchTickers', {
    method: "POST",
    body: JSON.stringify("Apple")
  })
    .then(res => res.json())
    .then(res => console.log(res));

  return (
    <AsyncSelect 
      cacheOptions 
      defaultOptions />
  )
}

export default SearchBar;