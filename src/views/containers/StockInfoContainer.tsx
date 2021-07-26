import StockLastQuote from '../components/StockLastQuote';

type StockInfoContainerProps = {
  selectedTicker: string
  lastQuote: {
    askPrice: string,
    bidPrice: string,
    spread: string
  } | null
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