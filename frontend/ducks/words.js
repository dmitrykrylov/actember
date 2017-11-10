export const types = {
  FETCH_WORD_REQUEST: 'FETCH_WORD_REQUEST',
  FETCH_WORD_SUCCESS: 'FETCH_WORD_SUCCESS',
  FETCH_WORD_FAILURE: 'FETCH_WORD_FAILURE',

  FETCH_WORD_LIST_REQUEST: 'FETCH_WORD_LIST_REQUEST',
  FETCH_WORD_LIST_SUCCESS: 'FETCH_WORD_LIST_SUCCESS',
  FETCH_WORD_LIST_FAILURE: 'FETCH_WORD_LIST_FAILURE',

  UPDATE_WORD_REQUEST: 'UPDATE_WORD_REQUEST',
  UPDATE_WORD_SUCCESS: 'UPDATE_WORD_SUCCESS',
  UPDATE_WORD_FAILURE: 'UPDATE_WORD_FAILURE',
};


const initialState = {
  wordList: [],
  cachedWords: {},
};


export default function words(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_WORD_LIST_SUCCESS:
      return { ...state, wordList: action.payload.results };
    case types.FETCH_WORD_SUCCESS:
      return {
        ...state,
        cachedWords: { ...state.cachedWords, [action.payload.id]: action.payload },
      };
    case types.UPDATE_WORD_REQUEST:
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
  fetchWordList: payload => ({ type: types.FETCH_WORD_LIST_REQUEST, payload }),
  fetchWord: payload => ({ type: types.FETCH_WORD_REQUEST, payload }),
  updateWordStatus: payload => ({ type: types.UPDATE_WORD_REQUEST, payload }),
};
