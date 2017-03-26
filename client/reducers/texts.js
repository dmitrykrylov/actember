import * as actionTypes  from '../constants/ActionTypes';


const initialState = {
  textList: [],
}

export default function texts(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_TEXT_LIST_SUCCESS':
      return {...state, textList: action.textList}
    default:
      return {
        ...state
      }
  }
};