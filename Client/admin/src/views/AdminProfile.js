import React, { useEffect } from 'react';
import { Row, Col } from 'antd';
import AdminDetail from '../components/contents/adminProfile/AdminDetail';
import AdminAccountDetail from '../components/contents/adminProfile/AdminAccountDetail';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


const AdminProfile = ({ profile, error, loading }) => {
  return (
    (loading === false && error.status === 400) ?
      (<div>{error.msg}
        <AdminAccountDetail />
      </div>
      )
      :
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

AdminProfile.propsTypes = {
  error: PropTypes.object.isRequired,
  loading: PropTypes.bool,
}

const mapStateToProps = state => ({
  profile: state.profile.profile,
  error: state.profile.error,
  loading: state.profile.loading
})

export default connect(mapStateToProps)(AdminProfile);
