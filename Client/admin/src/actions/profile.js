import axios from 'axios';
import {
    GET_PROFILES,
    GET_PROFILE,
    // UPDATE_PROFILE,
    CLEAR_PROFILE,
    // ACCOUNT_DELETED, 
    PROFILE_ERROR
} from '../constants';

//get all profiles
export const getAllProfiles = () => async dispatch => {

    dispatch({type: CLEAR_PROFILE});

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
