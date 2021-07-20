import request from 'request';
import github from '../../config/default.json';

import { GET_GITHUB } from '../types';

// get github repos
export const getRepos = () => async (dispatch) => {
  const api_url = process.env.REACT_APP_GITHUB_API_URL;
  const username = process.env.REACT_APP_GITHUB_USERNAME;
  const githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  const githubSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
  const options = {
    uri: `${api_url}/users/${username}/repos?sort=pushed:asc&client_id=${githubClientId}&client_secret=${githubSecret}`,
    method: 'GET',
    headers: { 'user-agent': 'node.js' },
  };
  console.log(`options`, options);

  request(options, (error, response, body) => {
    if (error) return [];

    if (response.statusCode !== 200) {
      return [];
    }
    const repos = JSON.parse(body);
    try {
      dispatch({
        type: GET_GITHUB,
        payload: repos,
      });
    } catch (error) {
      console.log('error is ', error);
    }
  });
};
