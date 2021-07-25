import { useState } from 'react';

import Header from '../components/Header';
import SplashText from '../components/SplashText';
import SplashImage from '../components/SplashImage';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';

const SplashContainer = () => {
  //state to hold search query
  const [searchQuery, setSearchQuery] = useState('');
  //state to hold array of search results returned from API call
  const [searchResults, setSearchResults] = useState([]);
  //state to hold selected ticker
  const [selectedTicker, setSelectedTicker] = useState('');

  return (
    <div>
      <Header />
      <SplashText />
      <SplashImage />
      <SearchBar 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        searchResults={searchResults}
        setSearchResults={setSearchResults}
        selectedTicker={selectedTicker}
        setSelectedTicker={setSelectedTicker}
      />
      <Footer />
    </div>
  )
}

export default SplashContainer;