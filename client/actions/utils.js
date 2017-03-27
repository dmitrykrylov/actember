import axios from 'axios';
import { API_BASE_URL } from '../config';


export const performRequest = ({ method, url, params, auth }) => {
  const body = method === 'get' ? 'params' : 'data';

  const config = {
    method,
    url,
    baseURL: API_BASE_URL,
    [body]: params || {},
  };
  if (auth) {
    config.headers = {
      Authorization: `Token ${localStorage.token}`,
    };
  }

  return axios.request(config);
};
