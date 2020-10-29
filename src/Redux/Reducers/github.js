import { GET_GITHUB } from '../types';

const initialState = {
  loading: true,
  repos: [],
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_GITHUB:
      return {
        ...state,
        loading: false,
        repos: payload,
      };
    default:
      return state;
  }
}
