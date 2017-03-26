import axios from 'axios';
import * as actionTypes from '../constants/ActionTypes';
import { API_BASE_URL } from '../config';
import { performRequest } from './utils'

export function login(creds) {
  return dispatch => {
    dispatch({
      type: actionTypes.LOGIN_REQUEST,
      isFetching: true,
      isAuthenticated: false,
      creds
    })

    axios.post(`${API_BASE_URL}/api/auth-token/`, creds).then(response => {
      localStorage.setItem('token', response.data.token)

      dispatch({
        type: actionTypes.LOGIN_SUCCESS,
        isFetching: false,
        isAuthenticated: true,
        token: response.token
      })

    }, error => {
      dispatch({
        type: actionTypes.LOGIN_FAILURE,
        isFetching: false,
        isAuthenticated: false,
        error
      })
    });
  }
}


export function addText(params) {
  return dispatch => {
      dispatch({ type: actionTypes.ADD_TEXT_REQUEST });

      performRequest(
        {url: '/api/texts/', method: 'POST', params, auth: true}).then(response => {
        dispatch({ type: actionTypes.ADD_TEXT_SUCCESS });
      }, error => {
        dispatch({ type: actionTypes.ADD_TEXT_FAILURE });
      });
    };
};


export function fetchTextList() {
  return dispatch => {
      dispatch({ type: actionTypes.FETCH_TEXT_LIST_REQUEST });

      performRequest(
        {url: '/api/texts/', method: 'GET', auth: true}).then(response => {
        dispatch({ type: actionTypes.FETCH_TEXT_LIST_SUCCESS, textList: response.data.results });
      }, error => {
        dispatch({ type: actionTypes.FETCH_TEXT_LIST_FAILURE });
      });
    };
};

