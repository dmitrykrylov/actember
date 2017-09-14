import * as actionTypes from '../constants/ActionTypes';


export function fetchWordList() {
  return {
    type: actionTypes.FETCH_WORD_LIST,
    url: '/api/user/words/',
  };
}


export function fetchWord(id) {
  return {
    type: actionTypes.FETCH_WORD,
    url: `/api/words/${id}/`,
  };
}


export function updateWordStatus({ wordId, known }) {
  return {
    type: actionTypes.UPDATE_WORD,
    url: `/api/user/words/${wordId}/`,
    options: {
      method: 'PUT',
      body: JSON.stringify({ known }),
    },
    payload: { wordId, known },
  };
}

export function fetchTextWords(id) {
  return {
    url: `/api/texts/${id}/words`,
    type: actionTypes.FETCH_TEXT_WORD_LIST,
  };
}