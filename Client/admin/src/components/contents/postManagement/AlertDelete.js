import React, { Component } from 'react';
import { Modal, Button } from 'antd';


class AlertDelete extends Component {
    state = { visible: false };
    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <>
                <Button type="primary" danger onClick={this.showModal}>
                    Delete
                </Button>
                <Modal
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <h3>Sure to delete?</h3>
                </Modal>
            </>
        );
    }
}

export default AlertDelete;