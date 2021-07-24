import Header from './views/components/Header';
import SplashText from './views/components/SplashText';
import SplashImage from './views/components/SplashImage';
import SearchBar from './views/components/SearchBar';
import Footer from './views/components/Footer';

import './App.css';

function App() {
  return (
    <header>
      <Header />
      <SplashText />
      <SplashImage />
      <SearchBar />
      <Footer />
    </header>
  );
}

export default App;