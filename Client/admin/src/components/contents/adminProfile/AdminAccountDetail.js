import React, { useState } from 'react'
import { Form, Input, Button } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { upDateProfile } from '../../../actions/profile'
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};


const AdminAccountDetail = ({
  profile,
  history,
  upDateProfile
}) => {

  let [formData] = useState({});

  const onFinish = (values) => {
    // console.log(values.user);
    upDateProfile(formData = values.user, history)
  };
  return ((profile !== null) ?
    (
      <Form {...layout}  name="nest-messages" onFinish={onFinish} >
        <Form.Item
          name={['user', 'email']}
          label="Email"
          rules={[
            {
              type: 'email',
            },
          ]}
          initialValue={profile.email}
        >
          <Input  />
        </Form.Item>
        <Form.Item
          name={['user', 'phone']}
          label="Phone"
          initialValue={profile.phone}
        >
          <Input  />
        </Form.Item>
        <Form.Item name={['user', 'fullName']} label="FullName" initialValue={profile.fullName}>
          <Input  />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }} >
          <Button type="primary" htmlType="submit">
            Save Changes
        </Button>
        </Form.Item>
      </Form>
    ) : "")
}

AdminAccountDetail.propsTypes = {
  profile: PropTypes.object.isRequired,
  updateProfile: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  profile: state.profile.profile
})

export default connect(mapStateToProps, { upDateProfile })(AdminAccountDetail)
