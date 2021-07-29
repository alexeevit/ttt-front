const api_url = process.env.REACT_APP_API_URL;

export const get = async (url) => {
  const requestOptions = {
    headers: { 'Content-Type': 'application/json' },
  };

  return fetch(`${api_url}${url}`, requestOptions);
};

export const post = async (url, body = null) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  };

  return fetch(`${api_url}${url}`, requestOptions);
};
