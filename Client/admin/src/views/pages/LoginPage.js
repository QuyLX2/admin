// import React, { Component } from 'react';
// import "../styles/style.css";
// import { Typography } from 'antd';
// // import { withRouter, Redirect } from 'react-router';
// // import LoginComponents from '../components/loginComponent/LoginComponents';

// // import { connect } from 'react-redux';

// const { Title, Text } = Typography;

// class LoginPage extends Component {
    
//     onFinish = (data) => {
//         // console.log(data);
//         this.setState({ loading: true });
//         this.props.login(data).then(res => {
//             this.setState({ loading: false });
//             if (res.data.token) {
//                 // window.location.href = "/";
//                 // Khong su dung redirect
//                 this.props.history.push = '/';
//                 // console.log(value);
//             }
//         }).catch((err) => {
//             console.log(err);
//             this.setState({ err: err.response.data.err, loading: false });
//         });
//     }

//     render() {
//         return (
//            <div></div> 
//         );
//     }
// }
// // function mapStateToProps(state) {
// //     return {
// //         isLoggedIn: state.user.isLoggedIn
// //     }
// // }
// export default LoginPage;