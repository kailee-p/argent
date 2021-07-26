import { useEffect, useState } from "react";
import { stockInfoControllers } from "../../controllers/stockInfoControllers";

import StockLastQuote from '../components/StockLastQuote';

type StockInfoContainerProps = {
  selectedTicker: string
  lastQuote: {
    askPrice: string,
    bidPrice: string,
    spread: string
  } | null
  setLastQuote: React.Dispatch<React.SetStateAction<null>>
}

const StockInfoContainer = ({ selectedTicker, lastQuote }: StockInfoContainerProps) => {
  
    return (
      <div>
        <h2>{selectedTicker}</h2>
        <StockLastQuote 
          lastQuote={lastQuote}
        />
      </div>
    )
}

export default StockInfoContainer;