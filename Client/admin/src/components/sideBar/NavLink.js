import React from 'react';
import { Menu } from 'antd';
import routes from '../../routes';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllProfiles } from '../../actions/profile';

const NavLink = ({ getAllProfiles }) => {
  return (
    <div>
      <Menu
        defaultSelectedKeys={['0']}
        defaultOpenKeys={['sub0']}
        mode='inline'
        theme='light'
      >
        {routes.map((child, index) => (
          <Menu.Item onClick={child.callApi} key={index} icon={child.icon}>
            <Link to={child.path}>
              {child.name_routes}
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
}

NavLink.propsTypes = {
  getAllProfiles: PropTypes.func.isRequired,
}

export default connect(null, { getAllProfiles })(NavLink);
