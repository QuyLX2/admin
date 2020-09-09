import React, { Component } from 'react';
import AdminPage from './views/AdminPage';
import routes from './routes';
import {
  BrowserRouter as Router
} from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
        <AdminPage routes={routes} />
      </Router>
    );
  }
}

export default App;