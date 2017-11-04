const apiUrl = function () {
  let url = '';

  if (process.env.NODE_ENV === 'production') {
    url = 'actember.herokuapp.com';
  } else {
    url = 'http://localhost:8000';
  }

  return url;
};


export const API_BASE_URL = apiUrl();
