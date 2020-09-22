import React, { useEffect } from 'react';
import AdminPage from './views/AdminPage';
import LoginPage from './views/LoginPage';
import UserPage from './views/UserPage';
import routes from './routes';
import store from '../src/store/store';
import PrivateRoute from './views/router/PrivateRoute';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import setAuthToken from '../src/utils/setAuthToken';
import { connect } from 'react-redux';
import { loadUser } from './actions/auth';


if (localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, [])
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <PrivateRoute path="/">
          <AdminPage routes={routes} />
        </PrivateRoute>
        <Route path="/user">
          <UserPage />
        </Route>
      </Switch>
    </Router>
  );
}


const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStateToProps)(App);
