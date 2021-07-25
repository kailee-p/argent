// import { useParams } from 'react-router-dom';
import { useState } from 'react';

import SearchBar from '../components/SearchBar';
import CompanyInfoContainer from './CompanyInfoContainer';
import StockInfoContainer from './StockInfoContainer';
// import { companyInfoControllers } from '../../controllers/companyInfoController';

const CompanyAndStockInfoContainer = () => {
  // let { ticker } = useParams<{ ticker: string}>();

  // companyInfoControllers.getCompanyInfo(ticker)
  //   .then((res) => res.json())
  //   .then((res) => console.log(res));
  
  //state to hold search query
  const [searchQuery, setSearchQuery] = useState('');
  //state to hold array of search results returned from API call
  const [searchResults, setSearchResults] = useState([]);
  //state to hold selected ticker
  const [selectedTicker, setSelectedTicker] = useState('');

  return (
    <div>
      <SearchBar 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        searchResults={searchResults}
        setSearchResults={setSearchResults}
        setSelectedTicker={setSelectedTicker}
      />
      <CompanyInfoContainer
        selectedTicker={selectedTicker}
      />
      <StockInfoContainer />
    </div>
  )
}

export default CompanyAndStockInfoContainer;