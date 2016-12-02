import {TOGGLE_SIDENAV} from '../utils/constants';

export default (state = false, action) => {
  switch (action.type) {
    case TOGGLE_SIDENAV:
      return !state;
    default:
      return state;
  }
};
