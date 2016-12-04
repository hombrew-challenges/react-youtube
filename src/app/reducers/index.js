import {combineReducers} from 'redux';

// reducers
import PageListReducer from './page-list';
import SidenavStateReducer from './sidenav-state';
import PlaylistReducer from './playlist';

const rootReducer = combineReducers({
  pages: PageListReducer,
  sidenavState: SidenavStateReducer,
  playlist: PlaylistReducer
});

export default rootReducer;
