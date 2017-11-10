import { all, takeEvery } from 'redux-saga/effects';
import { types as authTypes } from '../ducks/auth';
import { types as textTypes } from '../ducks/texts';
import { types as wordTypes } from '../ducks/words';
import * as authSagas from './auth';
import * as textSagas from './texts';
import * as wordSagas from './words';


export default function* rootSaga() {
  yield all([
    // auth
    takeEvery(authTypes.LOGIN_REQUEST, authSagas.login),
    takeEvery(authTypes.LOGOUT_REQUEST, authSagas.logout),
    // texts
    takeEvery(textTypes.ADD_TEXT_REQUEST, textSagas.addText),
    takeEvery(textTypes.FETCH_TEXT_REQUEST, textSagas.fetchText),
    takeEvery(textTypes.FETCH_TEXT_LIST_REQUEST, textSagas.fetchTextList),
    takeEvery(textTypes.FETCH_TEXT_WORD_LIST_REQUEST, textSagas.fetchTextWordList),
    takeEvery(textTypes.DELETE_TEXT_REQUEST, textSagas.deleteText),
    // words
    takeEvery(wordTypes.FETCH_WORD_LIST_REQUEST, wordSagas.fetchWordList),
    takeEvery(wordTypes.FETCH_WORD_REQUEST, wordSagas.fetchWord),
    takeEvery(wordTypes.UPDATE_WORD_REQUEST, wordSagas.updateWordStatus),
  ]);
}
