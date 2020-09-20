import React, { useEffect } from 'react';
import AdminPage from './views/AdminPage';
import LoginPage from './views/LoginPage';
import UserPage from './views/UserPage';
import routes from './routes';
import { Provider } from 'react-redux';
import store from '../src/store/store';
import PrivateRoute from './views/router/PrivateRoute';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import setAuthToken from '../src/utils/setAuthToken';
import { loadUser } from './actions/auth';
if (localStorage.token) {
  setAuthToken(localStorage.token)
}


const App = () => {
  useEffect(() => {
    store.dispatch(loadUser())
  })
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <PrivateRoute path="/admin">
            <AdminPage routes={routes} />
          </PrivateRoute>
          <Route path="/user">
            <UserPage />
          </Route>
          <Route exact path="/">
            <LoginPage />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}


export default App;
