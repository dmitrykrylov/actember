import * as actionTypes from '../constants/ActionTypes';


const initialState = {
  textList: [],
  text: {},
};

export default function texts(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_TEXT_LIST_SUCCESS':
      return { ...state, textList: action.response.results };
    case 'FETCH_TEXT_SUCCESS':
      return { ...state, text: action.response };
    default:
      return {
        ...state,
      };
  }
}
