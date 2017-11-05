import { call, put, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import axios from 'axios';
import { API_BASE_URL } from '../config';

const getToken = state => state.auth.token;

// https://github.com/redux-saga/redux-saga/issues/110
function* callApi({ headers, ...rest }) {
  try {
    const token = yield select(getToken);
    const response = yield call(
      axios,
      {
        baseURL: API_BASE_URL,
        headers: { Authorization: `JWT ${token}`, ...headers },
        ...rest,
      },
    );

    return response;
  } catch (error) {
    if (error.response.status === 401) {
      yield put({ type: 'RESOURCE_NOT_AUTHORIZED' });
      yield put(push('/login'));
    }
    return error;
  }
}


export default callApi;
