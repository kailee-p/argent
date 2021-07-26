import { useHistory } from 'react-router-dom';
import { Grid } from '@material-ui/core';

import Header from '../components/multi/Header';
import SplashText from '../components/splash/SplashText';
import SplashImage from '../components/splash/SplashImage';
import CustomButton from '../components/splash/CustomButton';
import Footer from '../components/splash/Footer';

const SplashContainer = () => {
  //redirect to company search page on click
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
        spacing={5}
      >
        <Grid item xs={6}>
          <SplashText />
          <CustomButton
            buttonText="Discover your next investment"
            onClick={handleClick}
          />
        </Grid>
        <Grid item xs={6}>
          <SplashImage />
        </Grid>
      </Grid>
      <Footer />
    </div>
  )
}

export default SplashContainer;