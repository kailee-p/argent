import { List, ListItem, ListItemText, Divider } from '@material-ui/core';
import { lastQuoteInterface } from '../../../interfaces/stockInfoInterfaces';
import styles from '../../../css/InfoDisplay.module.css';

type StockLastQuoteProps = {
  lastQuote: lastQuoteInterface | undefined
}

const StockLastQuote = ({ lastQuote }: StockLastQuoteProps) => {
  if (lastQuote !== undefined) {
    //destructure stock quote info from prop
    const { askPrice, bidPrice, spread } = lastQuote

    return (
      <section className={styles.stockInfoContainer}>
        <h3>Current Stock Quote</h3>
        <List>
          <ListItem>
            <ListItemText
              primary="Ask Price"
              secondary={`$${askPrice.toFixed(2)}`}
            />
          </ListItem>
          <Divider variant="middle" />
          <ListItem>
            <ListItemText
              primary="Bid Price"
              secondary={`$${bidPrice.toFixed(2)}`}
            />
          </ListItem>
          <Divider variant="middle" />
          <ListItem>
            <ListItemText
              primary="Spread"
              secondary={`$${spread.toFixed(2)}`}
            />
          </ListItem>
          <Divider variant="middle" />
        </List>
      </section>
    )
  } else { //lastQuote is null
    return <div></div>
  }
}

export default StockLastQuote;