import { companyInfoForDisplay } from '../../interfaces/companyInfoInterfaces';

import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton} from '@material-ui/core';
import LaunchIcon from '@material-ui/icons/Launch';

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
      url,
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
          <ListItem>
            <ListItemText
              primary="Company Website"
              secondary={url}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="got to company website">
                <LaunchIcon />
              </IconButton>
            </ListItemSecondaryAction>          
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