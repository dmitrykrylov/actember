import { types as wordTypes } from './words';


export const types = {
  ADD_TEXT_REQUEST: 'ADD_TEXT_REQUEST',
  ADD_TEXT_SUCCESS: 'ADD_TEXT_SUCCESS',
  ADD_TEXT_FAILURE: 'ADD_TEXT_FAILURE',

  FETCH_TEXT_LIST_REQUEST: 'FETCH_TEXT_LIST_REQUEST',
  FETCH_TEXT_LIST_SUCCESS: 'FETCH_TEXT_LIST_SUCCESS',
  FETCH_TEXT_LIST_FAILURE: 'FETCH_TEXT_LIST_FAILURE',

  FETCH_TEXT_REQUEST: 'FETCH_TEXT_REQUEST',
  FETCH_TEXT_SUCCESS: 'FETCH_TEXT_SUCCESS',
  FETCH_TEXT_FAILURE: 'FETCH_TEXT_FAILURE',

  FETCH_TEXT_WORD_LIST_REQUEST: 'FETCH_TEXT_WORD_LIST_REQUEST',
  FETCH_TEXT_WORD_LIST_SUCCESS: 'FETCH_TEXT_WORD_LIST_SUCCESS',
  FETCH_TEXT_WORD_LIST_FAILURE: 'FETCH_TEXT_WORD_LIST_FAILURE',

  DELETE_TEXT_REQUEST: 'DELETE_TEXT_REQUEST',
  DELETE_TEXT_SUCCESS: 'DELETE_TEXT_SUCCESS',
  DELETE_TEXT_FAILURE: 'DELETE_TEXT_FAILURE',
};


const initialState = {
  textList: [],
  text: {},
  wordList: [],
};


export default function texts(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_TEXT_LIST_SUCCESS:
      return { ...state, textList: action.payload.results };
    case types.FETCH_TEXT_SUCCESS:
      return { ...state, text: action.payload };
    case types.FETCH_TEXT_WORD_LIST_SUCCESS:
      return { ...state, wordList: action.payload.results };
    case wordTypes.UPDATE_WORD_REQUEST:
      return (() => {
        const index = state.wordList.findIndex(item => item.id === action.payload.id);
        const newList = [...state.wordList];
        newList[index].known = action.payload.known;
        return { ...state, wordList: newList };
      })();
    default:
      return { ...state };
  }
}


export const actions = {
  addText: payload => ({ type: types.ADD_TEXT_REQUEST, payload }),
  fetchText: payload => ({ type: types.FETCH_TEXT_REQUEST, payload }),
  fetchTextList: payload => ({ type: types.FETCH_TEXT_LIST_REQUEST, payload }),
  fetchTextWordList: payload => ({ type: types.FETCH_TEXT_WORD_LIST_REQUEST, payload }),
  deleteText: payload => ({ type: types.DELETE_TEXT_REQUEST, payload }),
};
