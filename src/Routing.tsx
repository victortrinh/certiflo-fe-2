import './App.css';

import { Route, Router, Switch } from 'react-router-dom';

import { BottomNavigationBar } from '@components/navigation/bottom-navigation-bar';
import { NavigationBar } from '@components/navigation/navigation-bar';
import { createBrowserHistory } from 'history';
import routes from './routes';
import styled from 'styled-components';

const history = createBrowserHistory();

export const Routing = () => (
  <Router history={history}>
    <NavigationBar />
    <StyledContainer>
      <Switch>
        {routes.map(({ key, ...props }) => {
          return <Route key={key} {...props} />;
        })}
      </Switch>
    </StyledContainer>
    <BottomNavigationBar />
  </Router>
);

const StyledContainer = styled.div`
  min-height: calc(100vh - 83px - 150px);
`;
