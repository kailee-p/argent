import { companyInfoForDisplay } from '../../../interfaces/companyInfoInterfaces';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Divider, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LaunchIcon from '@material-ui/icons/Launch';

import styles from '../../../css/InfoDisplay.module.css';

type CompanyInfoProps = {
  companyInfo: {
    info?: companyInfoForDisplay,
    error?: string
  } | null
}

const useStyles = makeStyles({
  tooltip: {
    fontSize: '12px',
  },
});

const CompanyInfo = ({ companyInfo }: CompanyInfoProps) => {
  //styles for tooltip
  const classes = useStyles();

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

    //conditionally render company info if found
    return (
      <section className={styles.companyInfoContainer}> 
        <h2 className={styles.companyInfoTitle}>{name} ({symbol})</h2>
        <List>
        { ceo && (
        <div>
          <ListItem>
            <ListItemText
              primary="CEO"
              secondary={ceo}
            />
          </ListItem>
          <Divider variant="middle" />
        </div>
        )}
        { hq_address &&  (
          <div>
            <ListItem>
              <ListItemText
                primary="Address"
                secondary={hq_address}
              />
            </ListItem>
            <Divider variant="middle" />
          </div>
        )}
        { phone && (
          <div>
            <ListItem>
              <ListItemText
                primary="Phone"
                secondary={phone}
              />
            </ListItem>
            <Divider variant="middle" />
          </div>
        )}
        { industry && (
          <div>
            <ListItem>
              <ListItemText
                primary="Industry"
                secondary={industry}
              />
            </ListItem>
            <Divider variant="middle" />
          </div>
        )}
        { parseInt(employees) > 0 && ( //don't render if no employees
          <div>
            <ListItem>
              <ListItemText
                primary="Employees"
                secondary={employees}
              />
            </ListItem>
            <Divider variant="middle" />
          </div>
        )}
        { description && (
          <div>
            <ListItem>
              <ListItemText
                primary="Description"
                secondary={description}
              />
            </ListItem>
            <Divider variant="middle" />
          </div>
        )}
        { url && (
          <div>
            <ListItem>
              <ListItemText
                primary="Website"
                secondary={url}
              />
              <ListItemSecondaryAction>
                <Tooltip 
                  classes={{tooltip: classes.tooltip}}
                  title="Go to Company Website" >
                  <IconButton edge="end" aria-label="Go to Company Website">
                    <a href={url}>
                      <LaunchIcon />
                    </a>
                  </IconButton>
                </Tooltip>
              </ListItemSecondaryAction>          
            </ListItem>
          </div>
        )}
        </List>
      </section>
    )
  } else if (companyInfo !== null && companyInfo.hasOwnProperty('error')) {
    if (companyInfo.error === 'Not Found') { //render different message depending on error
      return (
        <section className={styles.noCompanyInfoContainer}>
          No company associated with that ticker symbol. 
          See stock tab for more details on this ticker's stock.
        </section>
      )
    } else {
      return (
        <section className={styles.noCompanyInfoContainer}>
          ERROR: {companyInfo.error}
        </section>
      )
    }
  } else { //companyInfo is null
    return <div></div>
  }
}

export default CompanyInfo;