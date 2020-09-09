import React, { Component } from 'react';
import { Row, Col, Input, Card, Form } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import FormItemInput from 'antd/lib/form/FormItemInput';

export default class AdminAccountDetail extends Component {
  render() {
    return (
      <Card title='Admin Profile'>
        <Form layout='vertical'>
          <Row gutter={12}>
            <Col span={12} >
              <FormItem label='First Name'>
                <Input value='Dat'></Input>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem label='Last Name'>
                <Input value='Duong'></Input>
              </FormItem>
            </Col>
          </Row>
          <Row gutter={12}>
            <Col span={12}>
              <FormItem label='Email' type='email' value='dat'>
                <Input />
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem label='Password' type='password'>
                <Input.Password />
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <FormItem label='Address'>
                <Input />
              </FormItem>
            </Col>
          </Row>
        </Form>
        <Card
          style={{ marginTop: 16 }}
          type='inner'
          title='Inner Card title'
          extra={<a href='#'>More</a>}
        >
          Inner Card content
        </Card>
      </Card>
    );
  }
}
