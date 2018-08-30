import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import ReduxToastr from 'react-redux-toastr';
import SecurityInterceptor from '../../containers/SecurityInterceptor';
import LoginPage from '../Pages/Login';
import SignUpPage from '../Pages/SignUp';
import NotFoundPage from '../Pages/NotFound';
import HomePage from '../Pages/Home';

const Main = () => (
  <main className="app-container">
    <BrowserRouter>
      <Switch>
        <SecurityInterceptor exact path="/" UnauthenticatedComponent={LoginPage}>
          <HomePage />
        </SecurityInterceptor>
        <Route path="/signup" component={SignUpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
    <ReduxToastr
      timeOut={4000}
      newestOnTop={false}
      preventDuplicates
      position="top-right"
      transitionIn="fadeIn"
      transitionOut="fadeOut"
      progressBar
      closeOnToastrClick
    />
  </main>
);

export default Main;
