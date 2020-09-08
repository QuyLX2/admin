import React, { Component } from 'react'
import { Comment, Avatar, Form, Button, List, Input } from 'antd';
import moment from 'moment';

const { TextArea } = Input;

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
    itemLayout="horizontal"
    renderItem={props => <Comment {...props} />}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        Add Comment
      </Button>
    </Form.Item>
  </>
);



export default class Discuss extends Component {
     state = {
        comments: [],
        submitting: false,
        value: '',
    };

    handleSubmit = () => {
    if (!this.state.value) {
      return;
    }

    this.setState({
      submitting: true,
    });

    setTimeout(() => {
      this.setState({
        submitting: false,
        value: '',
        comments: [
          {
            author: 'Duong Dat',
            avatar: 'https://i.pinimg.com/564x/65/2f/c4/652fc4cfb7bac1a8cd311f2d53935a24.jpg',
            content: <p>{this.state.value}</p>,
            datetime: moment().fromNow(),
          },
          ...this.state.comments,
        ],
      });
    }, 1000);
  };

    handleChange = e => {
        this.setState({
        value: e.target.value,
        });
    };
    
    render() {
        const { comments, submitting, value } = this.state;
        return (
            <>
                {comments.length > 0 && <CommentList comments={comments} />}
                <Comment 
                style={{padding: '5px'}}
                    avatar={
                    <Avatar
                    src="https://i.pinimg.com/564x/65/2f/c4/652fc4cfb7bac1a8cd311f2d53935a24.jpg"
                    alt="Duong Dat"
                    />
                    }
                    content={                     
                        <Editor
                            onChange={this.handleChange}
                            onSubmit={this.handleSubmit}
                            submitting={submitting}
                            value={value}
                        />
                    }
                    
                />
                
            </>
        )
    }
}
