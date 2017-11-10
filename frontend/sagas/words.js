import { put } from 'redux-saga/effects';
import callApi from '../utils/callApi';
import { types } from '../ducks/words';


export function* fetchWordList({ payload }) {
  try {
    const response = yield callApi({ url: '/api/user/words/', params: payload });
    yield put({ type: types.FETCH_WORD_LIST_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: types.FETCH_WORD_LIST_FAILURE, error });
  }
}


export function* fetchWord({ payload }) {
  try {
    const response = yield callApi({ url: `/api/words/${payload.id}/` });
    yield put({ type: types.FETCH_WORD_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: types.FETCH_WORD_FAILURE, error });
  }
}


export function* updateWordStatus({ payload }) {
  try {
    const { id, known } = payload;
    const response = yield callApi({ method: 'put', url: `/api/user/words/${id}/`, data: { known } });
    yield put({ method: 'put', type: types.UPDATE_WORD_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: types.UPDATE_WORD_FAILURE, error });
  }
}

