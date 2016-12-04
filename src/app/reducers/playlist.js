import {GET_PLAYLIST} from '../utils/constants';

export default (state = [], action) => {
  switch (action.type) {
    case GET_PLAYLIST:
      console.log(action.payload.items);
      return action.payload.items;
    default:
      return state;
  }
};
