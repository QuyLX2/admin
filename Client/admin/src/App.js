import React, { Component } from 'react';
import UserListManagement from './views/pages/UserListManagement';
import MarkTable from './views/pages/MarkTable';
import AddNewPost from './views/pages/AddNewPost';

class App extends Component {
  render() {
    return (
      <div>
        <MarkTable/>
        <UserListManagement/>
        <AddNewPost/>
      </div>
    );
  }
}

export default App;

