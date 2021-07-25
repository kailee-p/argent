import { useEffect, useState } from "react";
import { stockInfoControllers } from "../../controllers/stockInfoControllers";

type StockInfoContainerProps = {
  selectedTicker: string
}

const StockInfoContainer = ({ selectedTicker }: StockInfoContainerProps) => {
    //state to hold last quote returned from API; begins as null
    const [lastQuote, setLastQuote] = useState(null);

    //search for company info upon ticker change, if ticker is not empty string
    useEffect(() => {
      if (selectedTicker !== '') {
        stockInfoControllers.getLastQuote(selectedTicker)
        .then((res) => res.json())
        .then((res) => console.log(res))
        // .catch((err) => console.log('stockInfoControllers.getStockInfo ERROR: ', err));
      }
    }, [selectedTicker])
  
    return (
      <div>
        Stock Info Placeholder
      </div>
    )
}

export default StockInfoContainer;