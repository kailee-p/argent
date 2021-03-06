import { Bar } from 'react-chartjs-2';
import { prevDayInfoInterface } from '../../../interfaces/stockInfoInterfaces';
import styles from '../../../css/InfoDisplay.module.css';

type StockPrevCloseDataVizProps = {
  prevDayInfo: prevDayInfoInterface | undefined
}

const StockPrevCloseDataViz = ({ prevDayInfo }: StockPrevCloseDataVizProps) => {
  if (prevDayInfo !== undefined) {
    //destructure prev day info from prop
    const { openPrice, highestPrice, lowestPrice, closePrice } = prevDayInfo;
  
    //data for bar chart to display prev day data visualization
    const data = {
      labels: ['Open Price', 'Close Price', 'Highest Price', 'Lowest Price'],
      datasets: [
        {
          label: 'USD',
          data: [openPrice, closePrice, highestPrice, lowestPrice ],
          backgroundColor: [
            'rgb(22, 180, 194, 0.2)',
            'rgb(89, 67, 191, 0.2)',
            'rgb(163, 163, 163, 0.2)',
            'rgb(210, 15, 86, 0.2)'
          ],
          borderColor: [
            'rgb(22, 180, 194, 1)',
            'rgb(89, 67, 191, 1)',
            'rgb(163, 163, 163, 1)',
            'rgb(210, 15, 86, 1)'
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
        aria-label="a bar chart visualizing the previous day's open, high, low, and close price for selected stock ticker"
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

export default StockPrevCloseDataViz;