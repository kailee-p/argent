import Header from './views/components/Header';
import SplashText from './views/components/SplashText';
import SplashImage from './views/components/SplashImage';
import SearchContainer from './views/containers/SearchContainer';
import Footer from './views/components/Footer';

import './App.css';

function App() {
  return (
    <header>
      <Header />
      <SplashText />
      <SplashImage />
      <SearchContainer />
      <Footer />
    </header>
  );
}

export default App;