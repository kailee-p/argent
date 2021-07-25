import React, { useState, useEffect } from 'react';
import Autocomplete from 'react-autocomplete';
import { searchControllers } from '../../controllers/searchControllers';

const SearchBar = () => {
  //state to hold search query
  const [searchQuery, setSearchQuery] = useState('');
  //state to hold array of search results returned from API call
  const [searchResults, setSearchResults] = useState([]);
  //state to hold selected query
  const [selectedTicker, setSelectedTicker] = useState('');

  console.log(selectedTicker);

  useEffect(() => {
    searchControllers.searchTickers(searchQuery)
      .then((res) => res.json())
      .then((res) => setSearchResults(res.nameAndTickerArr));
  }, [searchQuery])

  return (
    <div>
      <Autocomplete
        getItemValue={(item) => item}
        items={searchResults}
        renderItem={(item, isHighlighted) =>
          <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
            {item}
          </div>
        }
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onSelect={(value) => setSelectedTicker(value.split(':')[0])} //split ticker from string
      />
    </div>
  )
}

export default SearchBar;