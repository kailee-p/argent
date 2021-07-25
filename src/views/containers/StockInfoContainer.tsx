import { useEffect, useState } from "react";
import { stockInfoControllers } from "../../controllers/stockInfoControllers";

import StockLastQuote from '../components/StockLastQuote';

type StockInfoContainerProps = {
  selectedTicker: string
}

const StockInfoContainer = ({ selectedTicker }: StockInfoContainerProps) => {
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
    }, [selectedTicker])
  
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