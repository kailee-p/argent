import React from 'react';
import AsyncSelect from 'react-select/async';

const SearchBar = () => {

  fetch('/.netlify/functions/searchTickers')
    .then(res => res.text())
    .then(res => console.log(res));

  return (
    <AsyncSelect 
      cacheOptions 
      defaultOptions />
  )
}

export default SearchBar;