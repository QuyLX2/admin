import React, { useEffect } from 'react'
import { Table, Tag, Space } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'phone',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'marks',
    key: 'marks',
    dataIndex: 'marks',
    render: marks => (
      <>
        {marks.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <Space size="middle">
        <a>Delete</a>
      </Space>
    ),
  },
];


const UserListManagement = ({ profiles }) => {
  useEffect(() => {
    console.log(profiles);
  }, [profiles])
  const data = profiles.map((profile) => {
    let element = {};
    element.key = profile._id;
    element.name = profile.person.name;
    element.phone = profile.phone;
    element.marks = profile.mark;
    return element;
  })
  return (
    <Table columns={columns} dataSource={data} />
  )
}

UserListManagement.propsTypes = {
  profiles: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  profiles: state.profile.profiles
})

export default connect(mapStateToProps)(UserListManagement);
