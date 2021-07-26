import { List, ListItem, ListItemText, Divider } from '@material-ui/core';
import { prevDayInfoInterface } from '../../interfaces/stockInfoInterfaces';

type StockPrevCloseProps = {
  prevDayInfo: prevDayInfoInterface | null
}

const StockPrevClose = ({ prevDayInfo }: StockPrevCloseProps) => {
  if (prevDayInfo !== null) {
    const { openPrice, highestPrice, lowestPrice, closePrice } = prevDayInfo;
    return (
      <section>
        <h3>Previous Day Open/High/Low/Close (OHLC)</h3>
        <List>
            <ListItem>
              <ListItemText
                primary="Open Price"
                secondary={`$${openPrice.toFixed(2)}`}
              />
            </ListItem>
            <Divider variant="middle" />
            <ListItem>
              <ListItemText
                primary="Close Price"
                secondary={`$${closePrice.toFixed(2)}`}
              />
            </ListItem>
            <Divider variant="middle" />
            <ListItem>
              <ListItemText
                primary="Highest Price"
                secondary={`$${highestPrice.toFixed(2)}`}
              />
            </ListItem>
            <Divider variant="middle" />
            <ListItem>
              <ListItemText
                primary="Lowest Price"
                secondary={`$${lowestPrice.toFixed(2)}`}
              />
            </ListItem>
            <Divider variant="middle" />
        </List>
      </section>
    )
  } else {
    return <div></div>
  }
}

export default StockPrevClose;