import React, { Component } from 'react';
import {
  Typography,
  Card,
  Form,
  Input,
  Button,
  Row,
  Col,
  Space,
  Image,
} from 'antd';

const { Title } = Typography;

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};
const tailLayout = {
  wrapperCol: { offset: 4, span: 20 },
};

class LoginPage extends Component {
  onFinish = (values) => {
    console.log('Success:', values);
  };
  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          width: '100%',
          background: 'rgb(178,44,204)',
          background:
            'linear-gradient(45deg, rgba(178,44,204,1) 28%, rgba(252,70,107,1) 89%)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Card
          style={{
            width: '50%',
            height: '60vh',
            borderRadius: '15px',
            boxShadow: '-1px 2px 18px 0px rgba(15,15,15,0.43)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Title style={{ textAlign: 'center' }} level={1}>
            LOGIN
          </Title>
          <div style={{ width: 500 }}>
            <Form
              {...layout}
              name='basic'
              initialValues={{
                remember: true,
              }}
              onFinish={this.onFinish}
              onFinishFailed={this.onFinishFailed}
            >
              <Form.Item
                label='Username'
                name='username'
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label='Password'
                name='password'
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button
                  style={{
                    width: '100%',
                    background: 'rgb(178,44,204)',
                    background:
                      'linear-gradient(45deg, rgba(178,44,204,1) 36%, rgba(227,48,103,1) 70%)',
                    borderRadius: 10,
                    color: '#fff',
                  }}
                  htmlType='submit'
                >
                  Login
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Card>
      </div>
    );
  }
}

export default LoginPage;
