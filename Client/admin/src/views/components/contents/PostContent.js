import React, { Component } from 'react';
import { Row, Col, Input } from 'antd';

const { TextArea } = Input;


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
            <TextArea rows={8} />
          </Col>
        </Row>
      </>
    );
  }
}

export default PostContent;
