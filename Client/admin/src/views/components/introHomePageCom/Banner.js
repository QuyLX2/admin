import React, { Component } from 'react'
import { Row, Col } from 'antd';
import { Typography, Button  } from 'antd';

const { Title } = Typography;


export default class Banner extends Component {
    render() {
        return (
            <Row>
                <Col span={12} offset={6} style={{textAlign: "center"}}>
                    <Title>React</Title>
                    <Title level={2}>Một thư viện JavaScript xây dựng giao diện người dùng</Title>
                    <Button type="primary">Bắt đầu</Button>
                    <Button type="link">Xem hướng dẫn</Button>
                </Col>
            </Row>
        )
    }
}
