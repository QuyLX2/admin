import React, { Component } from 'react';
import { Table, Space, Button, Badge } from 'antd';
import ModalPopUp from '../components/contents/postManagement/ModalPopUp';
import AlertDelete from '../components/contents/postManagement/AlertDelete';
import { Link } from "react-router-dom";


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
                <Badge count={9}>
                    <Button onClick={() => console.log("day la disscuss")} block>
                        <Link to="/discuss">
                            Link to Discuss
                        </Link>
                    </Button>
                </Badge>
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
    }
];

class PostManagement extends Component {
    render() {
        return (
            <Table columns={columns} dataSource={data} />
        );
    }
}

export default PostManagement;