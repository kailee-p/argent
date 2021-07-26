import { List, ListItem, ListItemText, Divider } from '@material-ui/core';
import { lastQuoteInterface } from '../../interfaces/stockInfoInterfaces';

type StockLastQuoteProps = {
  lastQuote: lastQuoteInterface | null
}

const StockLastQuote = ({ lastQuote }: StockLastQuoteProps) => {
  if (lastQuote !== null) {
    //destructure stock quote info from prop
    const { askPrice, bidPrice, spread} = lastQuote

    return (
      <section>
        <h3>Current Stock Quote</h3>
        <List>
          <ListItem>
            <ListItemText
              primary="Ask Price"
              secondary={askPrice}
            />
          </ListItem>
          <Divider variant="middle" />
          <ListItem>
            <ListItemText
              primary="Bid Price"
              secondary={bidPrice}
            />
          </ListItem>
          <Divider variant="middle" />
          <ListItem>
            <ListItemText
              primary="Spread"
              secondary={spread}
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