import * as actionTypes from '../constants/ActionTypes';


const initialState = {
  wordList: [],
  cachedWords: {},
};


export default function words(state = initialState, action) {
  switch (action.type) {
    case `${actionTypes.FETCH_WORD_LIST}_SUCCESS`:
      return { ...state, wordList: action.response.results };
    case `${actionTypes.FETCH_WORD}_SUCCESS`:
      return {
        ...state,
        cachedWords: { ...state.cachedWords, [action.response.id]: action.response },
      };
    case `${actionTypes.UPDATE_WORD}_REQUEST`:
      return (() => {
        const index = state.wordList.findIndex(item => item.id === action.payload.wordId);
        const newList = [...state.wordList];
        newList[index].known = action.payload.known;
        return { ...state, wordList: newList };
      })();
    default:
      return {
        ...state,
      };
  }
}
