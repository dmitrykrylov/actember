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

  DELETE_TEXT_REQUEST: 'DELETE_TEXT_REQUEST',
  DELETE_TEXT_SUCCESS: 'DELETE_TEXT_SUCCESS',
  DELETE_TEXT_FAILURE: 'DELETE_TEXT_FAILURE',
};


const initialState = {
  textList: [],
  text: {},
};


export default function texts(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_TEXT_LIST_SUCCESS:
      return { ...state, textList: action.payload.results };
    case types.FETCH_TEXT_SUCCESS:
      return { ...state, text: action.payload };
    default:
      return { ...state };
  }
}


export const actions = {
  addText: payload => ({ type: types.ADD_TEXT_REQUEST, payload }),
  fetchText: payload => ({ type: types.FETCH_TEXT_REQUEST, payload }),
  fetchTextList: payload => ({ type: types.FETCH_TEXT_LIST_REQUEST, payload }),
  deleteText: payload => ({ type: types.DELETE_TEXT_REQUEST, payload }),
};
