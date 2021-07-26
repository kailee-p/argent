import { useHistory } from 'react-router-dom';
import { Grid } from '@material-ui/core';

import Header from '../components/multi/Header';
import SplashText from '../components/splash/SplashText';
import SplashImage from '../components/splash/SplashImage';
import CustomButton from '../components/splash/CustomButton';
import Footer from '../components/splash/Footer';

import '../../css/SplashContainer.css';

const SplashContainer = () => {
  //redirect to company search on click
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
          <div id="splash-button-container">
            <CustomButton
              buttonText="Discover your next investment"
              onClick={handleClick}
              backgroundColor="#0C666E"
              padding="10px"
              fontSize="25px"
              border="2px solid"
              borderColor="#0C666E"
              borderRadius="5px"
              color="white"
              margin="50px 0 0 0"
            />
          </div>
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