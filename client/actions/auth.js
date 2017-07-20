import axios from 'axios';
import * as actionTypes from '../constants/ActionTypes';
import { API_BASE_URL } from '../config';


export function login(creds) {
  return (dispatch) => {
    dispatch({
      type: actionTypes.LOGIN_REQUEST,
      isFetching: true,
      isAuthenticated: false,
      creds,
    });

    axios.post(`${API_BASE_URL}/api-token-auth/`, creds).then((response) => {
      localStorage.setItem('token', response.data.token);

      dispatch({
        type: actionTypes.LOGIN_SUCCESS,
        isFetching: false,
        isAuthenticated: true,
        token: response.token,
      });
    }, (error) => {
      dispatch({
        type: actionTypes.LOGIN_FAILURE,
        isFetching: false,
        isAuthenticated: false,
        error,
      });
    });
  };
};
