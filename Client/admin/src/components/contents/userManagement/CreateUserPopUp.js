import React, { Component } from 'react';
import { Row, Col, Input, Form, DatePicker } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import FormItemInput from 'antd/lib/form/FormItemInput';

export default class CreateUserPopUp extends Component {
  render() {
    return (
        <Form layout='vertical'>
          <Row gutter={12}>
            <Col span={12} >
              <FormItem label='First Name' required= 'true'>
                <Input value='Dat'></Input>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem label='Last Name' required= 'true'>
                <Input value='Duong'></Input>
              </FormItem>
            </Col>
          </Row>
          <Row gutter={12}>
            <Col span={24}>
              <FormItem label='Email' type='email' required= 'true'>
                <Input />
              </FormItem>
            </Col>
          </Row>
          <Row gutter={12}>
            <Col span={12}>
              <FormItem label='Password' type='password' required= 'true'>
                <Input.Password />
              </FormItem>
            </Col>
          </Row>

          {/* <Row>
            <Col span={24}>
              <FormItem label='Date of birth'>
                <DatePicker />
              </FormItem>
            </Col>
          </Row> */}
        </Form>
    );
  }
}
