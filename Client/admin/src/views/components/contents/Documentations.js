import React, { Component, Suspense } from 'react';
import NavLink from '../sideBar/NavLink';
import { Switch, Route } from 'react-router-dom';
import routes from '../../../routes'
import { Tag, Layout } from 'antd'
import {
    SyncOutlined,
} from '@ant-design/icons';

const { Content } = Layout;

class Documentations extends Component {
    render() {
        return (
            <div>
                <Content>
                    <Layout style={{ padding: '24px 0', background: '#fff' }}>
                        <NavLink />
                        <Content style={{ padding: '0 24px', minHeight: '80vh' }}>
                            <Switch>
                                <Suspense fallback={<Tag icon={<SyncOutlined spin />} color="processing">Loading</Tag>}>
                                    {routes.map((route) =>
                                        route.children ? ( route.children.map((child) => (
                                    <Route path={child.path}>
                                        {child.component}
                                    </Route>))
                                    ) : (
                                    <Route path={route.path}>
                                        {route.component}
                                    </Route>))
                                    }
                                </Suspense>
                            </Switch>
                        </Content>
                    </Layout>
                </Content>
            </div>
        );
    }
}

export default Documentations;