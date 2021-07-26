import { companyInfoForDisplay } from '../../interfaces/companyInfoInterfaces';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Divider, Tooltip } from '@material-ui/core';
import LaunchIcon from '@material-ui/icons/Launch';

type CompanyInfoProps = {
  selectedTicker: string,
  companyInfo: {
    info?: companyInfoForDisplay,
    error?: string
  } | null
}

const CompanyInfo = ({ selectedTicker, companyInfo }: CompanyInfoProps) => {
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
              <Tooltip title="Go to Company Website">
                <IconButton edge="end" aria-label="Go to Company Website">
                  <a href={url}>
                    <LaunchIcon />
                  </a>
                </IconButton>
              </Tooltip>
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