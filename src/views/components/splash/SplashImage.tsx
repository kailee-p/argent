import splashImage from '../../../images/argent-splash-image.jpg';
import '../../../css/SplashImage.css';

const SplashImage = () => {
  return (
    <img
      id="splash-image"
      src={splashImage} 
      alt="An abstract design, shifting shapes of blue, purple, white, and black in a quartzlike/iridescent pattern" />
  )
}

export default SplashImage;