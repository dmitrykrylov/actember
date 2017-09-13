import fetch from 'isomorphic-fetch';
import { API_BASE_URL } from '../config';


const callAPI = ({ dispatch, getState }) => next => (action) => {
  const {
    type,
    requestData,
    url,
    shouldCallAPI = () => true,
    payload = {},
    options = {},
  } = action;

  options.headers = {
    Authorization: `JWT ${localStorage.getItem('token')}`,
    'Content-Type': 'application/json',
  };

  if (!url) {
    return next(action);
  }

  if (!shouldCallAPI(getState())) {
    return false;
  }

  console.log(options)

  const typeRequest = `${type}_REQUEST`;
  const typeSuccess = `${type}_SUCCESS`;
  const typeFail = `${type}_FAIL`;

  dispatch({
    type: typeRequest,
    payload,
  });
  return new Promise((resolve, reject) => {
    fetch(`${API_BASE_URL}${url}${requestData ?
      `?${Object.keys(requestData).map(key => `${key}=${JSON.stringify(requestData[key])}`).join('&')}` :
      ''}`, options)
    .then((response) => {
      if (response.status === 401) {
        localStorage.removeItem('token');
      }
      return response.json();
    })
    .then((json) => {
      console.log(json)
      if (!json.error) {
        dispatch({
          type: typeSuccess,
          payload,
          response: json,
        });
        resolve(json);
      } else {
        dispatch({
          type: typeFail,
          payload,
          response: json.error,
        });
        reject(json);
        throw new Error(json.error.name || json.error.status);
      }
    })
    .catch((err) => {
      dispatch({
        type: typeFail,
        payload,
        response: err,
      });
      reject(err);
    });
  });
};

export default callAPI;
