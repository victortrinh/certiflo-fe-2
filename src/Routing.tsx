import './App.css';

import { Route, Router, Switch } from 'react-router-dom';

import { NavigationBar } from './components/navigation/navigation-bar';
import { createBrowserHistory } from 'history';
import routes from './routes';

const history = createBrowserHistory();

export const Routing = () => (
  <Router history={history}>
    <NavigationBar />
    <Switch>
      {routes.map(({ key, ...props }) => {
        return <Route key={key} {...props} />;
      })}
    </Switch>
  </Router>
);
