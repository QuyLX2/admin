import React, { Component } from 'react';
import { Layout } from 'antd';
import { Link, Route, Switch } from 'react-router-dom';
import NavLink from '../components/sideBar/NavLink';
import HeaderCom from '../components/header/HeaderCom';

const { Content, Sider } = Layout;

class AdminPage extends Component {
    render() {
        const { routes } = this.props;
        return (
            <Layout style={{ minHeight: "100vh" }}>
                <HeaderCom />
                <Layout>
                    <Sider>
                        <NavLink />
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                margin: 0
                            }}
                        >
                        <Switch>
                            {routes.map((child, index) => (
                                <Route path={child.path} key={index}>
                                    {child.component}
                                </Route>
                            ))}
                        </Switch>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        );
    }
}

export default AdminPage;