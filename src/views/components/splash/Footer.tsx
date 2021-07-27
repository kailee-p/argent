import { Box, Grid } from '@material-ui/core'

import styles from '../../../css/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Grid container justifyContent="center">
        <Grid item>
          <Box textAlign="center">
            Argent by <a href="https://github.com/kailee-p">@kailee-p</a> | Photo by <a href="https://unsplash.com/@jenegallery?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jené Stephaniuk</a> on <a href="https://unsplash.com/">Unsplash</a>
          </Box>
        </Grid>
      </Grid>
    </footer>
  )
}

export default Footer;