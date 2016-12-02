import React, {Component} from 'react';

// components
import SearchBar from '../containers/search-bar';
import BoddyWrapper from '../containers/body-wrapper';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar/>
        <BoddyWrapper/>
      </div>
    );
  }
}

