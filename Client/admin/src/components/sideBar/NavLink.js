import React, { Component } from 'react';
import { Menu } from 'antd';
import routes from '../../routes';
import { Link } from 'react-router-dom';

const menuItems = ['projects', 'about'];

class NavLink extends Component {
  render() {
    const activeStyle = { color: '#ff3333' };
    return (
      <div>
        <Menu
          // defaultSelectedKeys={['0']}
          // defaultOpenKeys={['sub0']}
          mode='inline'
          theme='light'
        >
          {routes.map((child, index) => (
            <Menu.Item key={index} icon={child.icon}>
              <Link to={child.path}>{child.name_routes}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </div>
    );
  }
}

export default NavLink;
