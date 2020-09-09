import React, { Component } from 'react';
import { Row, Col, Input, Card } from 'antd';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6

class PostContent extends Component {
  constructor(props) {
    super(props)
    this.state = { text: '' } // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (value) => {
    this.setState({ text: value })
  }
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
              <ReactQuill value={this.state.text}
                onChange={this.handleChange} />
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}

export default PostContent;
