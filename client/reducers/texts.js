import * as actionTypes from '../constants/ActionTypes';


const initialState = {
  textList: [],
  text: {}
};

export default function texts(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_TEXT_LIST_SUCCESS':
      return { ...state, textList: action.textList };
    case 'FETCH_TEXT_SUCCESS':
      return { ...state, text: action.text };
    default:
      return {
        ...state,
      };
  }
}
