import React, { Component } from 'react';
import { Row, Col, Input } from 'antd';

const { TextArea } = Input;
class PostContent extends Component {
  render() {
    return (
      <>
        <Row gutter={10} style={{ marginTop: 20 }}>
          <Col span={6}>
            <Input placeholder='SubTitle' />
          </Col>
          <Col span={6}>
            <Input placeholder='Image Link' />
          </Col>
        </Row>
        <Row style={{ marginTop: 20 }}>
          <Col span={24}>
            <TextArea rows={4} style={{ width: '100%', padding: 0 }} />
          </Col>
        </Row>
      </>
    );
  }
}

export default PostContent;
