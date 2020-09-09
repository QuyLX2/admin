import React, { Component } from 'react';
import { Layout, Menu, Dropdown, Button, Row, Col, Typography, Avatar, Badge } from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Header } = Layout;
const { Title } = Typography;


function handleMenuClick(e) {

    console.log('click', e);
}
const menu = (
    <Menu onClick={handleMenuClick} >
        <Menu.Item key="1" icon={<UserOutlined />}>
            1st menu item
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
            <Link to="/admin-profile">Admin Profile</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<LogoutOutlined />}>
            Log out
        </Menu.Item>
    </Menu>
);

class HeaderCom extends Component {
    render() {
        return (
            <Header className="header" style={{ height: "100px", lineHeight: "100px" }}>
                <Row>
                    <Col xs={2} sm={4} md={6} lg={8} xl={4} style={{ display: "flex", alignItems: "center" }}>
                        <Title type="warning" level={3}>ADMIN</Title>
                    </Col>
                    <Col style={{ display: "flex", alignItems: "center", justifyContent: "center" }} xs={20} sm={16} md={12} lg={8} xl={16}>
                        <Title type="warning" level={3}>Hỗ trợ học tập và quản lý sinh viên</Title>
                    </Col>
                    <Col xs={2} sm={4} md={6} lg={8} xl={4} style={{ textAlign: "right" }}>
                        <Dropdown overlay={menu}>
                            <Button style={{ width: "100%", height: 50, textAlign: "left" }}>
                                <Badge count={6}>
                                    <Avatar size={35} icon={<UserOutlined />} style={{ marginRight: 10 }} />
                                </Badge>
                                Admin
                            </Button>
                        </Dropdown>
                    </Col>
                </Row>
            </Header>
        );
    }
}

export default HeaderCom;