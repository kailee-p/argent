import React from 'react';
import { searchControllers } from '../../controllers/searchControllers';
import AsyncSelect from 'react-select/async';

const SearchBar = () => {

  searchControllers.searchTickers();

  return (
    <AsyncSelect 
      cacheOptions 
      defaultOptions />
  )
}

export default SearchBar;