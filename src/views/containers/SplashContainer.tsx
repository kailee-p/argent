import { useHistory } from 'react-router-dom';

import Header from '../components/Header';
import SplashText from '../components/SplashText';
import SplashImage from '../components/SplashImage';
import CustomButton from '../components/CustomButton';
import Footer from '../components/Footer';

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