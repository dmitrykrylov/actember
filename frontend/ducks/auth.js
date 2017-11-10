export const types = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',

  LOGOUT_REQUEST: 'LOGOUT_REQUEST',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
  LOGOUT_FAILURE: 'LOGOUT_FAILURE',
};


export const initialState = {
  token: null,
};


export default function auth(state = initialState, { type, payload }) {
  switch (type) {
    case types.LOGIN_SUCCESS:
      return { ...state, token: payload.token };
    case types.LOGOUT_SUCCESS:
      return { ...state, token: null };
    default:
      return state;
  }
}


export const actions = {
  login: payload => ({ type: types.LOGIN_REQUEST, payload }),
  logout: () => ({ type: types.LOGOUT_REQUEST }),
};

