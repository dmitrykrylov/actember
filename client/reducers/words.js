import * as actionTypes from '../constants/ActionTypes';


const initialState = {
  wordList: [],
  cachedWords: {}
};


export default function words(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_WORD_LIST_SUCCESS':
      return { ...state, wordList: action.response.results };
    case 'FETCH_WORD_SUCCESS':
      const nextCachedWords = { ...state.cachedWords };
      nextCachedWords[action.word.id] = action.response;
      return { ...state, cachedWords: nextCachedWords };
    default:
      return {
        ...state,
      };
  }
}
