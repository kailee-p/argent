import { Switch, Grid } from '@material-ui/core';
import { styled } from '@material-ui/core';
import React, { useState } from 'react';

import { lastQuoteInterface, prevDayInfoInterface } from '../../interfaces/stockInfoInterfaces';

import StockLastQuote from '../components/stock/StockLastQuote';
import StockPrevClose from '../components/stock/StockPrevClose';
import StockLastQuoteDataViz from '../components/stock/StockLastQuoteDataViz';
import StockPrevCloseDataViz from '../components/stock/StockPrevCloseDataViz';

import styles from '../../css/InfoDisplay.module.css';

//styling for switch
const CustomSwitch = styled(Switch)(() => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: "#0C666E",
    '&:hover': {
      backgroundColor: "rgba(12, 102, 110, .25)"
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: "#0C666E",
  }
}));

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
    <Grid 
      container 
      justifyContent="center"
      className={styles.companyAndStockInfoContainer}
    >
      <h2 className={styles.stockTitle}>{selectedTicker}</h2>
      <Grid 
        className={styles.stockSwitch}
        container 
        justifyContent="center"
        alignItems="center" 
      >
        <Grid item>Previous</Grid>
        <Grid item>
          <CustomSwitch 
            checked={stocksSwitchToday} 
            onChange={handleChange}
            aria-label="Switch between today's stock info and yesterday's stock info"
          />
        </Grid>
        <Grid item>Current</Grid>
      </Grid>
      { stocksSwitchToday === true && 
        <Grid container>
          <Grid item xs={6}>
            <StockLastQuote 
              lastQuote={lastQuote}
            /> 
          </Grid>
          <Grid item xs={6}>
            <StockLastQuoteDataViz
                lastQuote={lastQuote}
              />
          </Grid>
        </Grid>
      }
      { stocksSwitchToday !== true && (
        <Grid container>
          <Grid item xs={6}>
            <StockPrevClose
              prevDayInfo={prevDayInfo}
            />
          </Grid>
          <Grid item xs={6}>
          <StockPrevCloseDataViz
            prevDayInfo={prevDayInfo}
          />
          </Grid>
        </Grid>
      )}
    </Grid>
  )
}

export default StockInfoContainer;