import * as actionTypes from '../constants/ActionTypes';


const initialState = {
  wordList: [],
  cachedWords: {},
};


export default function words(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_WORD_LIST_SUCCESS':
      return { ...state, wordList: action.response.results };
    case 'FETCH_WORD_SUCCESS':
      return {
        ...state,
        cachedWords: { ...state.cachedWords, [action.word.id]: action.response },
      };
    default:
      return {
        ...state,
      };
  }
}