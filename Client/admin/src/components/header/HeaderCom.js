import React, { Component } from 'react';
import { Layout, Menu, Dropdown, Button, Row, Col, Typography, Avatar } from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { Link, Route } from 'react-router-dom';

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
            <Header className="header" style={{height:"100px", lineHeight:"100px"}}>
                <Row>
                    <Col xs={2} sm={4} md={6} lg={8} xl={4} style={{display:"flex", alignItems:"center"}}>
                        <Title type="warning" level={3}>ADMIN</Title>
                    </Col>
                    <Col style={{ display: "flex", alignItems: "center", textAlign: "center" }} xs={20} sm={16} md={12} lg={8} xl={16}>

                    </Col>
                    <Col xs={2} sm={4} md={6} lg={8} xl={4} style={{ textAlign: "right" }}>                       
                        <Dropdown overlay={menu}>
                            <Button style={{ width: "100%", height:"35px",textAlign:"left" }}>
                                <Avatar size={22} icon={<UserOutlined />} />
                                Duong Dat
                            </Button>
                        </Dropdown>
                    </Col>
                </Row>
            </Header>
        );
    }
}

export default HeaderCom;