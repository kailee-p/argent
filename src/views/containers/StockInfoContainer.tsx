import { Switch, Grid } from '@material-ui/core';
import React, { useState } from 'react';
import StockLastQuote from '../components/StockLastQuote';
import StocksPrevClose from '../components/StocksPrevClose';

type StockInfoContainerProps = {
  selectedTicker: string
  lastQuote: {
    askPrice: string,
    bidPrice: string,
    spread: string
  } | null
}

const StockInfoContainer = ({ selectedTicker, lastQuote }: StockInfoContainerProps) => {
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
        <StockLastQuote 
          lastQuote={lastQuote}
        /> 
      }
      { stocksSwitchToday !== true && (
        <StocksPrevClose />
      )}
      <Grid component="label" container alignItems="center" spacing={2}>
        <Grid item>Yesterday</Grid>
        <Grid item>
          <Switch 
            checked={stocksSwitchToday} 
            onChange={handleChange}
          />
        </Grid>
        <Grid item>Today</Grid>
      </Grid>
    </div>
  )
}

export default StockInfoContainer;