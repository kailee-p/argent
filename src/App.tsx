import { Route, Switch } from 'react-router-dom';
import SplashContainer from './views/containers/SplashContainer';
import AllInfoContainer from './views/containers/AllInfoContainer';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={SplashContainer} />
      <Route exact path="/company-search" component={AllInfoContainer} />
    </Switch>
  );
}

export default App;