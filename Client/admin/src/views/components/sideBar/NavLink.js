import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import routes from '../../../routes';


const { SubMenu } = Menu;
const { Sider } = Layout;


class NavLink extends Component {
    render() {
        return (
            <Sider width={200} style={{ background: '#fff' }}>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%' }}
                >
                    {routes.map((route, index) => {
                        return route.children ? (
                                <SubMenu key={index} icon={route.icon} title={route.name}>
                                    {route.children.map((child, idx) => (
                                        <Menu.Item key={child.name + idx}><Link to={child.path}>{child.name}</Link></Menu.Item>
                                    ))}
                                </SubMenu>
                            ) : (
                                <Menu.Item key={index} icon={route.icon}>
                                    <Link to={route.path}>{route.name}</Link>
                                </Menu.Item>
                            )
                        })}
                </Menu>
            </Sider>
        )
    }
} 
export default NavLink;
