import React, { Component } from 'react';
import { Layout, Menu, Dropdown, Button, message, Row, Col, Typography } from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import SearchCom from './SearchCom';

const { Header } = Layout;
const { Title } = Typography;


function handleMenuClick(e) {
    message.info('Click on menu item.');
    console.log('click', e);
}
const menu = (
    <Menu onClick={handleMenuClick} >
        <Menu.Item key="1" icon={<UserOutlined />}>
            1st menu item
      </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
            2nd menu item
      </Menu.Item>
        <Menu.Item key="3" icon={<LogoutOutlined />}>
            3rd menu item
      </Menu.Item>
    </Menu>
);

class HeaderCom extends Component {
    render() {
        return (
            <Header className="header">

                <Row>
                    <Col xs={2} sm={4} md={6} lg={8} xl={4} style={{display:"flex", alignItems:"center"}}>
                        <Title type="warning" level={3}>ADMIN</Title>
                    </Col>
                    <Col style={{ display: "flex", alignItems: "center", textAlign: "center" }} xs={20} sm={16} md={12} lg={8} xl={16}>
                        <SearchCom />
                    </Col>
                    <Col xs={2} sm={4} md={6} lg={8} xl={4} style={{ textAlign: "right" }}>
                        
                        <Dropdown overlay={menu}>
                            <Button style={{ width: "100%" }}>
                                <UserOutlined />
                            </Button>
                        </Dropdown>
                    </Col>
                </Row>
            </Header>
        );
    }
}

export default HeaderCom;