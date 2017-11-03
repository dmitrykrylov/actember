const apiUrl = function () {
  let url = '';

  if (process.env.NODE_ENV === 'local') {
    url = '';
  } else if (process.env.NODE_ENV === 'development') {
    url = 'http://localhost:8000';
  } else if (process.env.NODE_ENV === 'production') {
    url = 'actember.herokuapp.com';
  }
  return url;
};


export const API_BASE_URL = apiUrl();
