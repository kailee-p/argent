import React from 'react';
import AsyncSelect from 'react-select/async';

const SearchBar = () => {

  fetch('https://argent-2021.netlify.app/.netlify/functions/searchTickers')
    .then(res => res.json())
    .then(res => console.log(res))

  return (
    <AsyncSelect 
      cacheOptions 
      defaultOptions />
  )
}

export default SearchBar;