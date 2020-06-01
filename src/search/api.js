export function getSearch(q, order) {
  const body = new URLSearchParams({
    q,
    part: 'snippet',
    order,
    maxResults: 25,
    key: process.env.REACT_APP_API_KEY,
  }).toString();

  const url = `https://www.googleapis.com/youtube/v3/search?${body}`;

  return fetch(url, {
    method: 'GET',
  })
    .then(response => response.text())
    .then(text => JSON.parse(text))
    .catch(error => {
      console.log(error);
      return {error};
    });
}

export function getComments(id) {
  const body = new URLSearchParams({
    id,
    part: 'statistics',
    maxResults: 25,
    key: process.env.REACT_APP_API_KEY,
  }).toString();

  const url = `https://www.googleapis.com/youtube/v3/videos?${body}`;

  return fetch(url, {
    method: 'GET',
  })
    .then(response => response.text())
    .then(text => JSON.parse(text))
    .catch(error => {
      console.log(error);
      return {error};
    });
}
