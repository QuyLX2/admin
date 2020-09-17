import React, { Component } from 'react';
import { Row, Col, Input, Card } from 'antd';

class PostContent extends Component {

  render() {
    return (
      <>
        <Row style={{ marginTop: 20 }}>
          <Col span={6} >
            <Input placeholder="SubTitle" />
          </Col>
        </Row>
        <Row style={{ marginTop: 20 }}>
          <Col span={24}>
            <Card style={{ width: "100%", padding: 0}}>
             This is Content
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}

export default PostContent;
