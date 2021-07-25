import { Route, Switch } from 'react-router-dom';
import SplashContainer from './views/containers/SplashContainer';
import CompanyAndStockInfoContainer from './views/containers/CompanyAndStockInfoContainer';

import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={SplashContainer} />
      <Route exact path="/:ticker/info" component={CompanyAndStockInfoContainer} />
    </Switch>
  );
}

export default App;