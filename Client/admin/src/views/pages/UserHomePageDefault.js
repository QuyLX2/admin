import React, { Component } from 'react';
import { Layout, Menu, Dropdown, Button, message } from 'antd';
import { Input } from 'antd';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import FooterCom from '../components/footer/FooterCom';
import Documentations from '../components/contents/Documentations';
// import Community from '../components/contents/Community';
// import References from '../components/contents/References';

import {
    UserOutlined,
} from '@ant-design/icons';

const { Header } = Layout;
const { Search } = Input;

const menu = (
    <Menu onClick={handleMenuClick}>
        <Menu.Item key="1" icon={<UserOutlined />}>
            Your Profile
      </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
            Edit
      </Menu.Item>
        <Menu.Item key="3" icon={<UserOutlined />}>
            <Link to="/login">Log out</Link>
        </Menu.Item>
    </Menu>
);

function handleMenuClick(e) {
    message.info('Click on menu item.');
    console.log('click', e);
}

class UserHomePageDefault extends Component {

    render() {
        return (
            <Layout>
                <Header className="header">
                    <Row>
                        <Col span={12}>
                            <Menu
                                theme="dark"
                                mode="horizontal"
                                defaultSelectedKeys={['1']}
                                style={{ lineHeight: '64px', display: 'flex', justifyContent: 'space-around' }}
                            >
                                <Menu.Item key="1">
                                    <Link to="/">
                                        <div className="logo" >
                                            Logo
                                        </div>
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="2">
                                    <Link to="/Docs">
                                        Docs
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="3">
                                    <Link to="/Community">
                                        Community
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="4">
                                    <Link to="/References">
                                        References
                                    </Link>
                                </Menu.Item>
                            </Menu>
                        </Col>
                        <Col span={8}>
                            <Search
                                placeholder="input search"
                                onSearch={value => console.log(value)}
                                style={{ width: 200 }}
                            />
                        </Col>
                        <Col span={4}>
                            <div id="components-dropdown-demo-dropdown-button">
                                <Dropdown overlay={menu}>
                                    <Button>
                                        Account <UserOutlined />
                                    </Button>
                                </Dropdown>
                            </div>
                        </Col>
                    </Row>
                </Header>
                {/* Content */}
                <Documentations />
                {/* <Switch>
                    <Route path="/Docs">
                    </Route>
                    <Route path="/Community" >
                        <Community />
                    </Route>
                    <Route path="/References" >
                        <References />
                    </Route>
                </Switch> */}
                <FooterCom />
            </Layout>
        )
    }
}
export default UserHomePageDefault;