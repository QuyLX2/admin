import React, { Component } from 'react';
import { Row, Col, Input, Form } from 'antd';
import FormItem from 'antd/lib/form/FormItem';

export default class CreateUserPopUp extends Component {
  render() {
    return (
      <Form layout='vertical'>
        <Row gutter={12}>
          <Col span={24}>
            <FormItem label='Username' required='true'>
              <Input></Input>
            </FormItem>
          </Col>
        </Row>
        <Row gutter={12}>
          <Col span={24}>
            <FormItem label='Email' type='email' required='true'>
              <Input />
            </FormItem>
          </Col>
        </Row>
        <Row gutter={12}>
          <Col span={12}>
            <FormItem
              label='Password'
              name='password'
              type='password'
              required='true'
            >
              <Input.Password />
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              label='Confirm password'
              name='password2'
              type='password'
              required='true'
            >
              <Input.Password />
            </FormItem>
          </Col>
        </Row>
      </Form>
    );
  }
}
