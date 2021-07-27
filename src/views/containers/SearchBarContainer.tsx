import { useState } from 'react';
import SearchBar from '../components/multi/SearchBar';

type SearchBarContainerProps = {
  selectedTicker: string | null
  setSelectedTicker: React.Dispatch<React.SetStateAction<string>>
}

const SearchBarContainer = ({ selectedTicker, setSelectedTicker }: SearchBarContainerProps) => {
  //state to hold search query
  const [searchQuery, setSearchQuery] = useState('');
  //state to hold array of search results returned from API call
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div>
      <SearchBar 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        searchResults={searchResults}
        setSearchResults={setSearchResults}
        selectedTicker={selectedTicker}
        setSelectedTicker={setSelectedTicker}
      />
    </div>
  )
}

export default SearchBarContainer;