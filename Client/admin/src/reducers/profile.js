import {
    GET_PROFILES,
    GET_PROFILE,
    UPDATE_PROFILE,
    CLEAR_PROFILE,
    ACCOUNT_DELETED,
    PROFILE_ERROR
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
        case GET_PROFILE:
            return {
                ...state,
                profile: payload,
                loading: false
            };
        case CLEAR_PROFILE:
            return {
                ...state,
                profile: null,
            };
        case GET_PROFILE:
            return {
                ...state,
                profile: payload,
                loading: false
            };
        case PROFILE_ERROR:
            return {
                ...state,
                error: payload,
                loading: false,
                profile: null
            };

        default:
            return state;
    }
}