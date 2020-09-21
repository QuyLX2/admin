import {
  GET_POST,
  GET_POSTS,
  POST_ERROR,
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  ADD_COMMENT,
  REMOVE_COMMENT,
} from '../constants';

const initialState = {
  post: null,
  posts: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
        loading: false,
      };
    case GET_POST:
      return {
        ...state,
        post: payload,
        loading: false,
      };
    case POST_ERROR:
      return {
        ...state,
        err: {},
        loading: false,
      };

    default:
      return state;
  }
}
