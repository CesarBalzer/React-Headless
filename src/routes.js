import React from 'react';

import { isAuthenticated } from './auth';
import Main from './pages/Main';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Product from './pages/Product';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      isAuthenticated() ?
        (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
    )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <PrivateRoute path="/product" component={Product} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <Route path="/login" component={Login} />
    </Switch>
  </BrowserRouter>
);

export default Routes;