import { Route, Switch } from 'react-router';
import SplashContainer from './views/containers/SplashContainer';

import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <SplashContainer />
        </Route>
        <Route exact path="/:ticker/info">
          {/* <CompanyStockInfoContainer /> */}
        </Route>
      </Switch>
    </div>
  );
}

export default App;