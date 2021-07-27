import splashImage from '../../../images/argent-splash-image.jpg';
import styles from '../../../css/SplashImage.module.css';

const SplashImage = () => {
  return (
    <img
      className={styles.splashImage}
      src={splashImage} 
      alt="An abstract design, shifting shapes of blue, purple, white, and black in a quartzlike/iridescent pattern" />
  )
}

export default SplashImage;