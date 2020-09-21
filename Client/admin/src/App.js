import React from 'react';
import AdminPage from './views/AdminPage';
import LoginPage from './views/LoginPage';
import UserPage from './views/UserPage';
import routes from './routes';
import { Provider } from 'react-redux';
import store from '../src/store/store';
import PrivateRoute from './views/router/PrivateRoute';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';






const App = () => {
  
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <PrivateRoute  path="/">
            <AdminPage routes={routes} />
          </PrivateRoute>
          <Route path="/user">
            <UserPage />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}


export default App;
