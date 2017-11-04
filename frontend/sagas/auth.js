import { put, call } from 'redux-saga/effects';
import callApi from '../utils/callApi';
import { types } from '../ducks/auth';
import axios from 'axios';


export function* login({ payload }) {
  try {
    console.log('SSSAAAGGGAAA')
    const response = yield call(axios, ({ method: 'post', url: 'http://localhost:8000/api/api-token-auth/', data: payload }));
    const { token } = response.data;
    yield put({ type: types.LOGIN_SUCCESS, payload: { token } });
    window.localStorage.setItem('token', token);
  } catch (error) {
    yield put({ type: types.LOGIN_FAILURE, error });
  }
}


export function* logout({ payload }) {
  try {
    const response = yield callApi({ method: 'post', url: '/api/logout/', data: payload });
    const { token } = response.data;
    yield put({ type: types.LOGOUT_SUCCESS, payload: { token } });
    window.localStorage.removeItem('token');
  } catch (error) {
    yield put({ type: types.LOGOUT_FAILURE, error });
  }
}

