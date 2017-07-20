import * as actionTypes from '../constants/ActionTypes';
import { performRequest } from './utils';


export function fetchWordList() {
  return (dispatch) => {
    dispatch({ type: actionTypes.FETCH_WORD_LIST_REQUEST });

    performRequest(
      { url: '/api/words/', method: 'GET', auth: true }).then((response) => {
        dispatch({ type: actionTypes.FETCH_WORD_LIST_SUCCESS, wordList: response.data.results });
      }, () => {
        dispatch({ type: actionTypes.FETCH_WORD_LIST_FAILURE });
      });
  };
}


export function fetchWord(id) {
  return (dispatch) => {
    dispatch({ type: actionTypes.FETCH_WORD_REQUEST });

    performRequest(
      { url: `/api/words/${id}/`, method: 'GET', auth: true }).then((response) => {
        dispatch({ type: actionTypes.FETCH_WORD_SUCCESS, word: response.data });
      }, () => {
        dispatch({ type: actionTypes.FETCH_WORD_FAILURE });
      });
  };
}
