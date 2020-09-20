import React, { useState, Component } from 'react';
import CreateUser from '../components/contents/userManagement/CreateUser';
import SearchBar from '../components/Search/SearchBar';

import {
  Table,
  Input,
  InputNumber,
  Popconfirm,
  Form,
  Button,
  Row,
  Col,
  Typography,
} from 'antd';

const { Title } = Typography;
const originData = [];

for (let i = 0; i < 30; i++) {
  originData.push({
    key: i.toString(),
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const EditableTable = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState('');

  const isEditing = (record) => record.key === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
      name: '',
      age: '',
      address: '',
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  //   const handleDelete = key => {
  //     const dataSource = [...this.state.dataSource];
  //     this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
  //   };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      width: '20%',
      editable: true,
    },
    {
      title: 'Class',
      dataIndex: 'class',
      width: '10%',
      editable: true,
    },
    {
      title: 'Test 1',
      dataIndex: 'test1',
      width: '10%',
      editable: true,
    },
    {
      title: 'Test 2',
      dataIndex: 'test2',
      width: '10%',
      editable: true,
    },
    {
      title: 'Average Mark',
      dataIndex: 'mark',
      width: '20%',
      editable: true,
    },
    {
      title: 'Rank',
      dataIndex: 'rank',
      width: '10%',
      editable: true,
    },
    {
      title: 'Operation',
      dataIndex: 'operation',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <a
              href='!#'
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </a>
            <Popconfirm title='Sure to cancel?' onConfirm={cancel}>
              <a href='/'>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <a
              // href='/'
              disabled={editingKey !== ''}
              onClick={() => edit(record)}
            >
              <Button type='primary'>Edit</Button>
            </a>
            <Popconfirm title='Sure to delete?'>
              <Button type='primary' danger>
                Delete
              </Button>
            </Popconfirm>
          </div>
        );
      },
    },
  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName='editable-row'
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  );
};

class UserListManagement extends Component {
  render() {
    return (
      <div>
        <Title style={{ textAlign: 'center' }} level={2}>
          Student List
        </Title>
        <Row
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            paddingBottom: '10px',
          }}
        >
          <Col span={6}>
            <SearchBar />
          </Col>
          <Col span={6} style={{ textAlign: 'right' }}>
            <CreateUser />
          </Col>
        </Row>
        <EditableTable />
      </div>
    );
  }
}

export default UserListManagement;
