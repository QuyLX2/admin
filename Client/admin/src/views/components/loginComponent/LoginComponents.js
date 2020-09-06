import React, { Component } from 'react';
import { Form, Input, Button, Checkbox, Spin, Alert, Typography, Card } from 'antd';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import FormItem from 'antd/lib/form/FormItem';

const { Title, Text } = Typography;

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 10,
    },
};

const tailLayout = {
    wrapperCol: {
        span: 24,
    },
};

export default class LoginComponents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            err: ""
        }
    }
    render() {
        return (
            this.props.isLoggedIn ? <Redirect to="/" /> :
        <Card title={<Text underline>Login</Text>} style={{ width: 600, textAlign:"center", margin: "50px auto" }} >
            <Title><Text underline type="warning"> Login </Text></Title>
                {/* {this.props.children} */}
            <Form
                {...layout}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={this.onFinish}
            // onFinishFailed={onFinishFailed}
            >
                {this.state.err === "" ? "" : <Alert
                    message="Error"
                    description={this.state.err}
                    type="error"
                    showIcon
                />}

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
                </Form.Item>

                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                    
                </Form.Item>
                <FormItem>
                    <Button style={{marginLeft: "20%"}} type="primary" htmlType="submit" disabled={this.state.loading}>
                        {this.state.loading ? <Spin /> : "Login"}
                    </Button>
                    <Button type="link"><Link to="/login/register-form">Register now!</Link></Button>
                </FormItem>
            </Form>
        </Card>
        )
    }
}
