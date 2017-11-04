import { all, takeEvery } from 'redux-saga/effects';
import { types as authTypes } from '../ducks/auth';
import * as authSagas from './auth';
import * as textSagas from './texts';
import * as wordSagas from './words';



export default function* rootSaga() {
  yield all([
    takeEvery(authTypes.LOGIN_REQUEST, authSagas.login),
    takeEvery(authTypes.LOGOUT_REQUEST, authSagas.logout),
  ]);
}
