import { put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { types } from '../ducks/auth';
import callApi from '../utils/callApi';


export function* login({ payload }) {
  try {
    const response = yield callApi({ method: 'post', url: '/api-token-auth/', data: payload });
    const { token } = response.data;
    yield put({ type: types.LOGIN_SUCCESS, payload: { token } });
    window.localStorage.setItem('token', token);
    window.location.href = '/';
  } catch (error) {
    yield put({ type: types.LOGIN_FAILURE, error });
  }
}


export function* logout() {
  try {
    window.localStorage.removeItem('token');
    yield put({ type: types.LOGOUT_SUCCESS });
    yield put(push('/login'));
  } catch (error) {
    yield put({ type: types.LOGOUT_FAILURE, error });
  }
}
