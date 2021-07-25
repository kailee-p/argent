import { companyInfoForDisplay } from '../../interfaces/companyInfoInterfaces';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

type CompanyInfoProps = {
  companyInfo: {
    info?: companyInfoForDisplay,
    error?: string
  } | null
}

const CompanyInfo = ({ companyInfo }: CompanyInfoProps) => {
  console.log('companyInfo frontend', companyInfo); 
  
  if (companyInfo !== null && companyInfo.hasOwnProperty('info')) {
    //destructure details from companyInfo prop
    const {
      name,
      symbol,
      ceo,
      hq_address,
      phone,
      industry,
      employees,
      description
    } = companyInfo.info!

    return (
      <section>
        <h2>{name} ({symbol})</h2>
        <List>
          <ListItem>
            <ListItemText
              primary="CEO"
              secondary={ceo}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Address"
              secondary={hq_address}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Phone"
              secondary={phone}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Industry"
              secondary={industry}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Employees"
              secondary={employees}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Description"
              secondary={description}
            />
          </ListItem>
        </List>
      </section>
    )
  } else if (companyInfo !== null && companyInfo.hasOwnProperty('error')) {
    if (companyInfo.error === 'Not Found') { //render different message depending on error
      return (
        <section>
          No company associated with that ticker name.
        </section>
      )
    } else {
      return (
        <section>
          ERROR: {companyInfo.error}
        </section>
      )
    }
  } else { //companyInfo is null
    return <div></div>
  }
}

export default CompanyInfo;