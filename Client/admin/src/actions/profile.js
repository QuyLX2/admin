import axios from 'axios';
import { setAlert } from './alert'
import {
    GET_PROFILES,
    GET_PROFILE,
    CLEAR_PROFILE,
    PROFILE_ERROR,
    // UPDATE_PROFILE,
    // ACCOUNT_DELETED, 
} from '../constants';

//get all profiles
export const getAllProfiles = () => async dispatch => {
    dispatch({ type: CLEAR_PROFILE });
    try {
        const res = await axios.get('/api/profile');
        dispatch({
            type: GET_PROFILES,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

// get profile
export const getProfile = () => async dispatch => {
    try {
        const res = await axios.get('/api/profile/me');
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        })

    } catch (err) {
        console.log(err.response.data.msg);
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.data.msg, status: err.response.status }
        })
    }
}

// create or update profile
export const upDateProfile = (formData, history, edit = false) => async dispatch => {
    console.log(formData);
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    const body = JSON.stringify(formData);
    console.log(body);
    try {
        const res = await axios.post('api/profile', body, config);
        console.log(res);
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });
        // if (!edit) {
        //     history.push('/admin-profile');
        // }
    } catch (err) {
        // const errors = err.response.data.errors;
        // // if (errors) {
        // //     errors.forEach(error => dispatch(setAlert(error.msg, 'error')));
        // // }
        // dispatch({
        //     type: PROFILE_ERROR,
        //     payload: { msg: err.response.statusText, status: err.response.status }
        // });
        console.log(err);
    }
}
