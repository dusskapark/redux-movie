import { createAction, handleActions } from "redux-actions";
import _callApi from "../components/_callApi";

const GET_POST_PENDING = "post/GET_POST_PENDING";
const GET_POST_SUCCESS = "post/GET_POST_SUCCESS";
const GET_POST_FAILURE = "post/GET_POST_FAILURE";

const getPostPending = createAction(GET_POST_PENDING);
const getPostSuccess = createAction(GET_POST_SUCCESS);
const getPostFailure = createAction(GET_POST_FAILURE);

export const getPost = content => async dispatch => {
  dispatch(getPostPending());

  try {
    const response = await _callApi(content);
    dispatch(getPostSuccess(response));
    return response;
  }
  catch (error) {
    dispatch(getPostFailure(error));
    throw error;
  }

};

const initialState = {
  pending: false,
  error: false,
  movies: []
};

export default handleActions(
  {
    [GET_POST_PENDING]: (state, action) => {
      return {
        ...state,
        pending: true,
        error: false
      };
    },
    [GET_POST_SUCCESS]: (state, action) => {
      return {
        ...state,
        pending: false,
        movies: action.data
      };
    },
    [GET_POST_FAILURE]: (state, action) => {
      return {
        ...state,
        pending: false,
        error: true
      };
    }
  },
  initialState
);
