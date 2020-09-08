import React, { Component } from 'react';
import { Row, Col, Typography, Input, Button } from 'antd';
import PostContent from './PostContent';

const { Title } = Typography;
const { TextArea } = Input;


class AddNewPost extends Component {
  
  render() {
    return (
      <>
        <Row>
          <Col span={24}><Title level={2}>New Lesson</Title></Col>
        </Row>
        <Row >
          <Col span={12}><Input placeholder="Lesson's Title" /></Col>
          <Col span={5} offset={7} style={{ textAlign: "right" }}>
            <Button  type="primary" style={{ width: "95%" }}>Add Content</Button>
          </Col>
        </Row>
      </>
    );
  }
}

export default AddNewPost;