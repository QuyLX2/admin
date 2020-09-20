import React, { Component } from 'react';
import { Row, Col, Typography, Input, Button } from 'antd';
import PostContent from '../components/contents/addNewPost/PostContent';

const { Title } = Typography;
// const { TextArea } = Input;

class AddNewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      contentPost: [],
    };
  }
  addNewPost = () => {
    this.setState({
      ...this.state,
      contentPost: [
        ...this.state.contentPost,
        { subTitle: '', content: '', srcImg: '' },
      ],
    });
    // console.log(tempContent);
  };
  render() {
    return (
      <>
        <Row>
          <Col span={24} offset={10}>
            <Title level={2}>
              <Title level={2}>New Lesson</Title>
            </Title>
          </Col>
        </Row>
        <Row gutter={10}>
          <Col span={6}>
            <Input placeholder="Lesson's Title" />
          </Col>
          <Col span={6}>
            <Input placeholder="Exam" />
          </Col>
          <Col span={5} offset={7} style={{ textAlign: 'right' }}>
            <Button
              onClick={this.addNewPost}
              type='primary'
              style={{ width: '95%' }}
            >
              Add Content
            </Button>
          </Col>
        </Row>
        {this.state.contentPost.map((value, index) => (
          <PostContent key={index} />
        ))}
        {this.state.contentPost.length === 0 ? (
          ''
        ) : (
          <Button style={{ marginTop: 20 }} type='primary'>
            Submit
          </Button>
        )}
      </>
    );
  }
}

export default AddNewPost;
