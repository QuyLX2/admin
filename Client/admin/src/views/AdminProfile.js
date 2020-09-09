import React, { Component } from 'react';
import { Row, Col } from 'antd';
import AdminDetail from '../components/contents/adminProfile/AdminDetail';
import AdminAccountDetail from '../components/contents/adminProfile/AdminAccountDetail';

class AdminProfile extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col span={16} push={8}>
            <AdminAccountDetail />
          </Col>
          <Col span={6} pull={16}>
            <AdminDetail />
          </Col>
        </Row>
      </div>
    );
  }
}

export default AdminProfile;
