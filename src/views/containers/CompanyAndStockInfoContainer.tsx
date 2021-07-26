// import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { Tabs, Tab } from '@material-ui/core';

import SearchBar from '../components/SearchBar';
import CompanyInfoContainer from './CompanyInfoContainer';
import StockInfoContainer from './StockInfoContainer';

import { stockInfoControllers } from "../../controllers/stockInfoControllers";

const CompanyAndStockInfoContainer = () => {
  //state to hold search query
  const [searchQuery, setSearchQuery] = useState('');
  //state to hold array of search results returned from API call
  const [searchResults, setSearchResults] = useState([]);
  //state to hold selected ticker
  const [selectedTicker, setSelectedTicker] = useState('');

  //state for tab navigation
  const [tab, setTab] = useState(0);

  //handler for tab navigation
  const handleTabs = (idx: number) => {
    setTab(idx);
  }

  //STOCK-RELATED STATE
  //state to hold last quote returned from API; begins as null
  const [lastQuote, setLastQuote] = useState(null);

  //search for stock info upon ticker change, if ticker is not empty string
  useEffect(() => {
    if (selectedTicker !== '') {
      stockInfoControllers.getLastQuote(selectedTicker)
      .then((res) => res.json())
      .then((res) => setLastQuote(res))
      .catch((err) => console.log('stockInfoControllers.getStockInfo ERROR: ', err));
    }
  }, [selectedTicker, setLastQuote])

  //array of tabs for company and stock info
  const infoTabs = [
    <CompanyInfoContainer
      selectedTicker={selectedTicker} 
    />,
    <StockInfoContainer
      selectedTicker={selectedTicker} 
      lastQuote={lastQuote}
      setLastQuote={setLastQuote}
    />
  ]

  if (selectedTicker !== '') {
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
        <Tabs
          value={tab}
          onChange={(_, idx) => handleTabs(idx)}
          centered
        >
          <Tab value={0} label="Company">
          </Tab>
          <Tab value={1} label="Stock">
          </Tab>
        </Tabs>
        <section>
          {infoTabs[tab]}
        </section>
      </div>
    )
  } else {
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
        Please search for a company name or ticker symbol above to get started.
      </div>
    )
  }
}

export default CompanyAndStockInfoContainer;