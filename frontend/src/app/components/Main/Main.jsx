import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import SecurityInterceptor from '../../containers/SecurityInterceptor';
import LoginPage from '../Pages/Login';
import NotFoundPage from '../Pages/NotFound';
import HomePage from '../Pages/Home';

const Main = () => (
  <main className="app-container">
    <BrowserRouter>
      <Switch>
        <SecurityInterceptor exact path="/" UnauthenticatedComponent={LoginPage}>
          <HomePage />
        </SecurityInterceptor>
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  </main>
);

export default Main;
