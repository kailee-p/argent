import { useHistory } from 'react-router-dom';
import { Grid } from '@material-ui/core';

import Header from '../components/multi/Header';
import SplashText from '../components/splash/SplashText';
import SplashImage from '../components/splash/SplashImage';
import CustomButton from '../components/splash/CustomButton';
import Footer from '../components/splash/Footer';

import styles from '../../css/SplashContainer.module.css';

const SplashContainer = () => {
  //button handleClick: redirect to company search 
  let history = useHistory();
  const handleClick = () => {
    history.push('/company-search');
  }

  return (
    <div>
      <Header />
      <Grid 
        justifyContent="center"
        container
        spacing={7}
      >
        <Grid item xs={6} className={styles.splashTextAndButtonContainer}>
          <SplashText />
          <div className={styles.splashButtonContainer}>
            <CustomButton
              className="splash-button"
              buttonText="Discover your next investment"
              onClick={handleClick}
              height="10vh"
              width="25vw"
              margin="2rem 0 0 0"
              padding=".2rem"
            />
          </div>
        </Grid>
        <Grid className={styles.splashImageContainer} item xs={6}>
          <SplashImage />
        </Grid>
      </Grid>
      <Footer />
    </div>
  )
}

export default SplashContainer;