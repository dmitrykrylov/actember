import axios from 'axios';
import * as actionTypes from '../constants/ActionTypes';
import { API_BASE_URL } from '../config';
import { push } from 'react-router-redux';


export function login(creds) {
  return (dispatch) => {
    dispatch({
      type: actionTypes.LOGIN_REQUEST,
      isFetching: true,
      isAuthenticated: false,
      creds,
    });

    axios.post(`${API_BASE_URL}/api/api-token-auth/`, creds).then((response) => {
      localStorage.setItem('token', response.data.token);

      dispatch({
        type: actionTypes.LOGIN_SUCCESS,
        isFetching: false,
        isAuthenticated: true,
        token: response.token,
      });
      dispatch(push('/'));
    }, (error) => {
      dispatch({
        type: actionTypes.LOGIN_FAILURE,
        isFetching: false,
        isAuthenticated: false,
        error,
      });
    });
  };
}

export function logout(creds) {
  return (dispatch) => {
    dispatch({
      type: actionTypes.LOGOUT_REQUEST,
      isFetching: true,
      isAuthenticated: false,
      creds,
    });
    dispatch(push('/login'));

    axios.post(`${API_BASE_URL}/api/logout/`, creds).then((response) => {
      localStorage.removeItem('token', response.data.token);

      dispatch({
        type: actionTypes.LOGOUT_SUCCESS,
        isFetching: false,
        isAuthenticated: true,
        token: response.token,
      });
    }, (error) => {
      dispatch({
        type: actionTypes.LOGOUT_FAILURE,
        isFetching: false,
        isAuthenticated: false,
        error,
      });
    });
  };
}
