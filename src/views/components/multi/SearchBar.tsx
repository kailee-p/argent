import { useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { searchControllers } from '../../../controllers/searchControllers';

import styles from '../../../css/SearchBar.module.css';

type SearchBarProps = {
  searchQuery: string,
  setSearchQuery:  React.Dispatch<React.SetStateAction<string>>,
  searchResults: string[],
  setSearchResults: React.Dispatch<React.SetStateAction<never[]>>,
  selectedTicker: string | null,
  setSelectedTicker: React.Dispatch<React.SetStateAction<string>>
}

const SearchBar = ({
  searchQuery, setSearchQuery, searchResults, setSearchResults, selectedTicker, setSelectedTicker
}: SearchBarProps) => {
  //searches for tickers to populate dropdown upon search query change
  useEffect(() => {
    searchControllers.searchTickers(searchQuery)
      .then((res) => res.json())
      .then((res) => setSearchResults(res.nameAndTickerArr))
      .catch((err) => console.log('searchControllers.searchTickers ERROR: ', err));
  }, [searchQuery, setSearchResults])

  return (
    <div className={styles.searchBar}>
      <Autocomplete
        className="search-bar"
        freeSolo
        options={searchResults}
        renderInput={(params) => (
          <TextField {...params} 
            label="Search"
            margin="normal" 
            variant="outlined" />
        )}
        value={selectedTicker}
        onChange={(_, newVal) => newVal !== null ? setSelectedTicker(newVal.split(':')[0]) : newVal }
        inputValue={searchQuery}
        onInputChange={(_, newInputVal) => setSearchQuery(newInputVal)}
      />
    </div>
  )
}

export default SearchBar;