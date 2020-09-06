import React, { Component } from 'react'
import { Form, Input, Button, Typography, Card  } from 'antd';
import { Link } from 'react-router-dom';


const { Title, Text } = Typography;

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 10,
    },
};
// const validateMessages = {
//     required: '${label} is required!',
//     types: {
//         email: '${label} is not validate email!',
//         number: '${label} is not a validate number!',
//     },
//     number: {
//         range: '${label} must be between ${min} and ${max}',
//     },
// };
// validateMessages={validateMessages}
export default class RegisterComponents extends Component {
    onFinish = values => {
        console.log(values);
      };
    render() {
        return (
        <Card title={<Text underline>Register</Text>} style={{ width: 600, textAlign:"center", margin: "50px auto" }} >
            <Title><Text underline type="warning"> Register </Text></Title>
            <Form {...layout} name="nest-messages" onFinish={this.onFinish} >
                <Form.Item
                    name={['user', 'name']}
                    label="Name"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                            name={['user', 'email']}
                            label="Email"
                            rules={[
                                {
                                    type: 'email',
                                },
                            ]}
                        >
                    <Input />
                </Form.Item>    
                <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="confirm"
                    label="Confirm Password"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                    {
                        required: true,
                        message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                        validator(rule, value) {
                        if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                        }
                        return Promise.reject('The two passwords that you entered do not match!');
                        },
                    }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                    <Button type="link"><Link to="/login">Login</Link></Button>
                </Form.Item>
            </Form>
        </Card>
        )
    }
}
