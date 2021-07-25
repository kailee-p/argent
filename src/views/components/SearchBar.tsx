import { useEffect } from 'react';
import Autocomplete from 'react-autocomplete';
import { searchControllers } from '../../controllers/searchControllers';

type SearchBarProps = {
  searchQuery: string,
  setSearchQuery:  React.Dispatch<React.SetStateAction<string>>,
  searchResults: string[],
  setSearchResults: React.Dispatch<React.SetStateAction<never[]>>,
  selectedTicker: string, 
  setSelectedTicker: React.Dispatch<React.SetStateAction<string>>
}

const SearchBar = ({
  searchQuery, setSearchQuery, searchResults, setSearchResults, selectedTicker, setSelectedTicker
}: SearchBarProps) => {
  //searches for tickers to populate dropdown upon search query change
  useEffect(() => {
    searchControllers.searchTickers(searchQuery)
      .then((res) => res.json())
      .then((res) => setSearchResults(res.nameAndTickerArr));
  }, [searchQuery, setSearchResults])

  //opens company/stock info page upon ticker selection
  useEffect(() => {
    console.log('ticker selected');
  }, [selectedTicker])

  return (
    <div>
      <Autocomplete
        getItemValue={(item) => item}
        items={searchResults}
        renderItem={(item, isHighlighted) =>
          <div 
            key={item}
            style={{ background: isHighlighted ? '#E0E0E0' : 'white' }} >
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