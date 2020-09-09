import React, { Component } from 'react';
import { Card, Avatar } from 'antd';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';

const { Meta } = Card;

export default class AdminProfileDetail extends Component {
  render() {
    return (
      <Card
        style={{ width: 300 }}
        cover={
          <img
            alt='example'
            src='https://i.pinimg.com/564x/e5/16/67/e516672250e5c78a2c1e8f791e9c5164.jpg'
          />
        }
        actions={[
          <SettingOutlined key='setting' />,
          <EditOutlined key='edit' />,
          <EllipsisOutlined key='ellipsis' />,
        ]}
      >
        <Meta
          avatar={
            <Avatar src='https://i.pinimg.com/564x/e5/16/67/e516672250e5c78a2c1e8f791e9c5164.jpg' />
          }
          title='The cute cat'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?'
        />
      </Card>
    );
  }
}
