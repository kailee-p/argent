// import { useParams } from 'react-router-dom';
import { useState } from 'react';

import { Tabs, Tab } from '@material-ui/core';

import SearchBar from '../components/SearchBar';
import CompanyInfoContainer from './CompanyInfoContainer';
import StockInfoContainer from './StockInfoContainer';

const CompanyAndStockInfoContainer = () => {
  //state to hold search query
  const [searchQuery, setSearchQuery] = useState('');
  //state to hold array of search results returned from API call
  const [searchResults, setSearchResults] = useState([]);
  //state to hold selected ticker
  const [selectedTicker, setSelectedTicker] = useState('');

  //state for tab navigation
  const [tab, setTab] = useState(0);

  //handle tab navigation
  const handleTabs = (idx: number) => {
    setTab(idx);
  }

  //array of tabs for company and stock info
  const infoTabs = [
    <CompanyInfoContainer
    selectedTicker={selectedTicker} />,
    <StockInfoContainer />
  ]

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
}

export default CompanyAndStockInfoContainer;