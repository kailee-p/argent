import { companyInfoForDisplay } from '../../interfaces/companyInfoInterfaces';

import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Divider } from '@material-ui/core';
import LaunchIcon from '@material-ui/icons/Launch';

type CompanyInfoProps = {
  companyInfo: {
    info?: companyInfoForDisplay,
    error?: string
  } | null
}

const CompanyInfo = ({ companyInfo }: CompanyInfoProps) => {
    
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
          <Divider variant="middle" />
          <ListItem>
            <ListItemText
              primary="Address"
              secondary={hq_address}
            />
          </ListItem>
          <Divider variant="middle" />
          <ListItem>
            <ListItemText
              primary="Phone"
              secondary={phone}
            />
          </ListItem>
          <Divider variant="middle" />
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
          <Divider variant="middle" />
          <ListItem>
            <ListItemText
              primary="Description"
              secondary={description}
            />
          </ListItem>
          <Divider variant="middle" />
          <ListItem>
            <ListItemText
              primary="Website"
              secondary={url}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="got to company website">
                <a href={url}>
                  <LaunchIcon />
                </a>
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