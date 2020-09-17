import React, { Component } from 'react';
import { Typography, Card, Form, Input, Button, Checkbox } from 'antd';

const layout = {
    labelCol: {
        span: 4,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};
const { Title } = Typography;

class LoginPage extends Component {

    onFinish = (values) => {
        console.log('Success:', values);
    };
    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    render() {
        return (
            <div className="site-card-border-less-wrapper" style={{ display: "flex", justifyContent: "center", height: "100vh", alignItems: "center" }}>
                <Card bordered={false} style={{ width: 600 }}>
                    <Title level={3} style={{ textAlign: "center" }}>Login</Title>
                    <Form
                        {...layout}
                        name="basic"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
                    >
                        <Form.Item
                            label="Username"
                            name="username"
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
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item >
                        <Form.Item {...tailLayout} >
                            <Button type="primary" htmlType="submit">
                                Login
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        );
    }
}

export default LoginPage;