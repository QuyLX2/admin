import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Form, Input, Button } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 },
  },
};
const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 20, offset: 4 },
  },
};

const DynamicFieldSet = () => {
  const onFinish = values => {
    console.log('Received values of form:', values);
  };

  return (
    <Form name="dynamic_form_item" {...formItemLayoutWithOutLabel} onFinish={onFinish}>
      <Form.List name="names">
        {(fields, { add, remove }) => {
          return (
            <div>
                <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => {
                    add();
                  }}
                  style={{ width: '60%' }}
                >
                  <PlusOutlined /> Add field
                </Button>
                <Button
                  type="dashed"
                  onClick={() => {
                    add('The head item', 0);
                  }}
                  style={{ width: '60%', marginTop: '20px' }}
                >
                  <PlusOutlined /> Add field at head
                </Button>
              </Form.Item>
              {fields.map((field, index) => (
                <Form.Item
                  {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                  label={index === 0 ? 'Passengers' : ''}
                  required={false}
                  key={field.key}
                >
                  <Form.Item
                    {...field}
                    validateTrigger={['onChange', 'onBlur']}
                    rules={[
                      {
                        required: true,
                        whitespace: true,
                        message: "Please input passenger's name or delete this field.",
                      },
                    ]}
                    noStyle
                  >
                    <Input placeholder="passenger name" style={{ width: '60%' }} />
                  </Form.Item>
                  {fields.length > 1 ? (
                    <MinusCircleOutlined
                      className="dynamic-delete-button"
                      style={{ margin: '0 8px' }}
                      onClick={() => {
                        remove(field.name);
                      }}
                    />
                  ) : null}
                </Form.Item>
              ))}
              
            </div>
          );
        }}
      </Form.List>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};


class AddNewPost extends Component {
    render() {
        return (
            <>
               <Row>
                  <h1 style={{textAlign:"center", fontSize:"2rem", textTransform:"uppercase"}}>New Lesson</h1>
                   <Col span={16}>
                    <DynamicFieldSet />
                   </Col>
                   {/* <Col span={8}>Col</Col> */}
                </Row> 
            </>
        );
    }
}

export default AddNewPost;