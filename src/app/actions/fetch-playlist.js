import {
  GET_PLAYLIST,
  YT_API_KEY,
  YT_LIST_ID,
  YT_BASE_URL
} from '../utils/constants';

export default() => {
  const url = `${YT_BASE_URL}?part=snippet&playlistId=${YT_LIST_ID}&maxResults=8&key=${YT_API_KEY}`;

  return {
    type: GET_PLAYLIST,
    payload: new Promise((resolve, reject) => {
      fetch(url)
        .then(response => response.json())
        .then(json => resolve(json))
        .catch(error => reject(error));
    })
  };
};
