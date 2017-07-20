import * as actionTypes from '../constants/ActionTypes';
import { performRequest } from './utils';


export function addText(params) {
  return (dispatch) => {
    dispatch({ type: actionTypes.ADD_TEXT_REQUEST });

    performRequest(
      { url: '/api/texts/', method: 'POST', params, auth: true }).then(() => {
        dispatch({ type: actionTypes.ADD_TEXT_SUCCESS });
      }, () => {
        dispatch({ type: actionTypes.ADD_TEXT_FAILURE });
      });
  };
}


export function fetchText(id) {
  return (dispatch) => {
    dispatch({ type: actionTypes.FETCH_TEXT_REQUEST });

    performRequest(
      { url: `/api/texts/${id}/`, method: 'GET', auth: true }).then((response) => {
        dispatch({ type: actionTypes.FETCH_TEXT_SUCCESS, text: response.data });
      }, () => {
        dispatch({ type: actionTypes.FETCH_TEXT_FAILURE });
      });
  };
}


export function fetchTextList() {
  return (dispatch) => {
    dispatch({ type: actionTypes.FETCH_TEXT_LIST_REQUEST });

    performRequest(
      { url: '/api/texts/', method: 'GET', auth: true }).then((response) => {
        dispatch({ type: actionTypes.FETCH_TEXT_LIST_SUCCESS, textList: response.data.results });
      }, () => {
        dispatch({ type: actionTypes.FETCH_TEXT_LIST_FAILURE });
      });
  };
}

