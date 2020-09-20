import {
    GET_PROFILES,
    GET_PROFILE,
    UPDATE_PROFILE,
    CLEAR_PROFILE,
    ACCOUNT_DELETED, PROFILE_ERROR
} from '../constants';

const initialState = {
    profile: null,
    profiles: [],
    loading: true,
    error: {}
}


export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_PROFILES:
            return {
                ...state,
                profiles: payload,
                loading: false
            };
    
        default:
            return state;
    }
}