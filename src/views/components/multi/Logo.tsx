import { Link } from 'react-router-dom';

import styles from '../../../css/Logo.module.css';

const Logo = () => {
  return (
    <div className={styles.argentLogo}>
      <Link to="/" aria-label="Go to home page">arg / ent</Link>
    </div>
  )
}

export default Logo;