import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({
    children,
    isAuthenticated,
    ...rest
}) => {
    return (
        <Route
            {...rest}
            render={(props) => (
                (!isAuthenticated) ? (<Redirect to="/login" />) : children
            )}
        />
    )
}

PrivateRoute.propsTypes = {
    isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStateToProps)(PrivateRoute); 
