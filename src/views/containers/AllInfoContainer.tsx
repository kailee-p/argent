// import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { Tabs, Tab } from '@material-ui/core';

import SearchBarContainer from './SearchBarContainer';
import Header from '../components/multi/Header';
import CompanyInfo from '../components/company/CompanyInfo';
import StockInfoContainer from './StockInfoContainer';

import { stockInfoControllers } from "../../controllers/stockInfoControllers";
import { companyInfoControllers } from '../../controllers/companyInfoController';

const AllInfoContainer = () => {
  //SEARCH-RELATED STATE 
  //state to hold selected ticker
  const [selectedTicker, setSelectedTicker] = useState('');

  //STOCK-RELATED STATE & SIDE EFFECTS
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

  //state to hold previous day information returned from API; begins as null
  const [prevDayInfo, setPrevDayInfo] = useState(null);

  //search for stock info previous day information upon ticker change, if ticker is not empty string
  useEffect(() => {
    if (selectedTicker !== '') {
      stockInfoControllers.getPrevDayInfo(selectedTicker)
      .then((res) => res.json())
      .then((res) => setPrevDayInfo(res))
      .catch((err) => console.log('stockInfoControllers.getPrevDayInfo ERROR: ', err));
    }
  }, [selectedTicker, setLastQuote])

  //COMPANY-RELATED STATE & SIDE EFFECTS
  //state to hold company info returned from API; begins as null
  const [companyInfo, setCompanyInfo] = useState(null);

  //search for company info upon ticker change, if ticker is not empty string
  useEffect(() => {
    if (selectedTicker !== '') {
      companyInfoControllers.getCompanyInfo(selectedTicker)
      .then((res) => res.json())
      .then((res) => setCompanyInfo(res))
      .catch((err) => console.log('companyInfoControllers.getCompanyInfo ERROR: ', err));
    }
  }, [selectedTicker, setCompanyInfo])

  //UI-RELATED STATE
  //state for tab navigation
  const [tab, setTab] = useState(0);

  //handler for tab navigation
  const handleTabs = (idx: number) => {
    setTab(idx);
  }

  //array of tabs for company and stock info
  const infoTabs = [
    <CompanyInfo
      companyInfo={companyInfo}
    />,
    <StockInfoContainer
      selectedTicker={selectedTicker} 
      lastQuote={lastQuote}
      prevDayInfo={prevDayInfo}
    />,
  ]

  if (selectedTicker !== '') {
    return (
      <div>
        <Header />
        <SearchBarContainer
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
        <Header />
        <SearchBarContainer
          selectedTicker={selectedTicker}
          setSelectedTicker={setSelectedTicker}
        />
        Please search for a company name or ticker symbol above to get started.
      </div>
    )
  }
}

export default AllInfoContainer;