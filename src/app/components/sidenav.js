import React, {Component} from 'react';

export default class SideNav extends Component {
  render() {
    return (
      <div className="sidenav-wrapper">
        <ul className="sidenav">
          <li className="sidenav-brand"><a href="#">Start Bootstrap</a></li>
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Shortcuts</a></li>
          <li><a href="#">Overview</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    );
  }
}
