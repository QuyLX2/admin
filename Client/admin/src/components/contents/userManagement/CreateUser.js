import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import CreateUserPopUp from './CreateUserPopUp';

import { UserAddOutlined } from '@ant-design/icons';

export default class CreateUser extends Component {
  state = {
    ModalText: 'Content of the modal',
    visible: false,
    confirmLoading: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({
      ModalText: 'The modal will be closed after two seconds',
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  };

  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  };

  render() {
    const { visible, confirmLoading } = this.state;
    return (
      <>
        <Button
          style={{ backgroundColor: '#389e0d', color: '#fff' }}
          onClick={this.showModal}
        >
          <UserAddOutlined />
          Create User
        </Button>
        <Modal
          style={{ textAlign: 'center' }}
          title='Create User'
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
          <CreateUserPopUp />
        </Modal>
      </>
    );
  }
}
