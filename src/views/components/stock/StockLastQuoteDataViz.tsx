import { Bar } from 'react-chartjs-2';
import { lastQuoteInterface } from '../../../interfaces/stockInfoInterfaces';
import styles from '../../../css/InfoDisplay.module.css';

type StockLastQuoteDataVizProps = {
  lastQuote: lastQuoteInterface | null
}

const StockLastQuoteDataViz = ({ lastQuote }: StockLastQuoteDataVizProps) => {
  if (lastQuote !== null) {
    //destructure stock quote info from prop
    const { askPrice, bidPrice, spread } = lastQuote
  
    //data for bar chart to display last stock quote visualization
    const data = {
      labels: ['Ask Price', 'Bid Price', 'Spread'],
      datasets: [
        {
          label: 'USD',
          data: [askPrice, bidPrice, spread],
          backgroundColor: [
            'rgb(22, 180, 194, 0.2)',
            'rgb(89, 67, 191, 0.2)',
            'rgb(163, 163, 163, 0.2)',
          ],
          borderColor: [
            'rgb(22, 180, 194, 1)',
            'rgb(89, 67, 191, 1)',
            'rgb(163, 163, 163, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };

    const options = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    };

    return (
      <div 
        role="img" 
        aria-label="a bar chart visualizing the ask price, bid price, and spread from the most recent quote for selected stock ticker"
      >
        <Bar 
          className={styles.stockGraph} 
          data={data} 
          options={options} />
      </div>  
    )
  } else {
    return <div></div>
  }
}

export default StockLastQuoteDataViz;