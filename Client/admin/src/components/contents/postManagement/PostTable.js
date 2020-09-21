import React, { useEffect } from 'react';
import { Table, Space, Button, Badge, Typography } from 'antd';
import AlertDelete from './AlertDelete';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllPosts } from '../../../actions/post';
const { Title } = Typography;

const PostTable = ({ post: { posts } }) => {
  //   useEffect(() => {
  //     getAllPosts();
  //   }, [getAllPosts]);
  const columns = [
    {
      title: 'Title',
      dataIndex: 'Title',
    },
    {
      title: 'Sub Title',
      dataIndex: 'Subtitle',
    },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <>
          <AlertDelete />
          <Button type='primary'>
            <Link to='/edit-post'>Edit Post</Link>
          </Button>
          <Badge count={9}>
            <Button onClick={() => console.log('day la disscuss')} block>
              <Link to='/discuss'>Link to Discuss</Link>
            </Button>
          </Badge>
        </>
      ),
    },
  ];

  let data = posts.map((post) => {
    let datas = {};
    datas.Title = post.title;
    datas.Subtitle = post.content.subTitle;
    return datas;
  });

  return (
    <>
      <Table columns={columns} dataSource={data} />
    </>
  );
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps)(PostTable);
