import { put } from 'redux-saga/effects';
import callApi from '../utils/callApi';
import { types } from '../ducks/texts';
import { push } from 'react-router-redux';


export function* addText({ payload }) {
  try {
    const response = yield callApi({ method: 'post', url: '/api/texts/', data: payload });
    yield put({ type: types.ADD_TEXT_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: types.ADD_TEXT_FAILURE, error });
  }
}


export function* fetchText({ payload }) {
  try {
    const response = yield callApi({ url: `/api/texts/${payload}/` });
    yield put({ type: types.FETCH_TEXT_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: types.FETCH_TEXT_FAILURE, error });
  }
}


export function* fetchTextList({ payload }) {
  try {
    const response = yield callApi({ url: '/api/texts/' });
    yield put({ type: types.FETCH_TEXT_LIST_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: types.FETCH_TEXT_LIST_FAILURE, error });
  }
}


export function* deleteText({ payload }) {
  try {
    const response = yield callApi({ method: 'delete', url: `/api/texts/${payload}/` });
    yield put({ type: types.FETCH_TEXT_WORD_LIST_SUCCESS, payload: response.data });
    yield put(push('/texts'));
  } catch (error) {
    yield put({ type: types.FETCH_TEXT_WORD_LIST_FAILURE, error });
  }
}
