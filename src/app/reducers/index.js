import {combineReducers} from 'redux';

// reducers
import PageListReducer from './page-list';
import SidenavStateReducer from './sidenav-state';

const rootReducer = combineReducers({
  pages: PageListReducer,
  sidenavState: SidenavStateReducer
});

export default rootReducer;
