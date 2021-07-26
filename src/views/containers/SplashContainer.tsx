import { useHistory } from 'react-router-dom';

import Header from '../components/splash/Header';
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
      <SplashText />
      <SplashImage />
      <CustomButton 
        buttonText="Discover your next investment"
        onClick={handleClick}
      />
      <Footer />
    </div>
  )
}

export default SplashContainer;