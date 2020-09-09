import React, { Component } from 'react';
import { Table, Space } from 'antd';
import ModalPopUp from '../components/contents/postManagement/ModalPopUp';
import AlertDelete from '../components/contents/postManagement/AlertDelete';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a href="">{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Action',
        key: 'action',
        render: () => (
            <Space >
                <AlertDelete />
                <ModalPopUp />
            </Space>
        ),
    },
];

const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    },
];

class PostManagement extends Component {
    render() {
        return (
            <Table columns={columns} dataSource={data} />
        );
    }
}

export default PostManagement;