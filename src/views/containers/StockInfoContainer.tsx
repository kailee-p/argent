import { Switch, Grid } from '@material-ui/core';
import React, { useState } from 'react';
import StockLastQuote from '../components/StockLastQuote';
import StockPrevClose from '../components/StockPrevClose';
import { lastQuoteInterface, prevDayInfoInterface } from '../../interfaces/stockInfoInterfaces';
import StockLastQuoteDataViz from '../components/StockLastQuoteDataViz';
import StockPrevCloseDataViz from '../components/StockPrevCloseDataViz';

type StockInfoContainerProps = {
  selectedTicker: string,
  lastQuote: lastQuoteInterface | null,
  prevDayInfo: prevDayInfoInterface | null
}

const StockInfoContainer = ({ selectedTicker, lastQuote, prevDayInfo }: StockInfoContainerProps) => {
  //state for switch that changes stocks view
  const [stocksSwitchToday, setStocksSwitchToday] = useState(true)
  
  //handler for switch
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (stocksSwitchToday === true) {
      setStocksSwitchToday(false);
    } else {
      setStocksSwitchToday(true);
    }
  }

  return (
    <div>
      <h2>{selectedTicker}</h2>
      { stocksSwitchToday === true && 
        <>
          <StockLastQuote 
            lastQuote={lastQuote}
          /> 
          <StockLastQuoteDataViz
            lastQuote={lastQuote}
          />
        </>
      }
      { stocksSwitchToday !== true && (
        <>
          <StockPrevClose
            prevDayInfo={prevDayInfo}
          />
          <StockPrevCloseDataViz
            prevDayInfo={prevDayInfo}
          />
        </>
      )}
      <Grid component="label" container alignItems="center" spacing={2}>
        <Grid item>Previous Day</Grid>
        <Grid item>
          <Switch 
            checked={stocksSwitchToday} 
            onChange={handleChange}
          />
        </Grid>
        <Grid item>Current</Grid>
      </Grid>
    </div>
  )
}

export default StockInfoContainer;