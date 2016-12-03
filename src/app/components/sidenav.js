import React, {Component, PropTypes} from 'react';

export default class SideNav extends Component {

  pageIsSelected(selected) {
    return selected ? 'selected' : '';
  }

  pageListItems() {
    return this.props.pages.map((page, index) => {
      return (
        <li key={index}>
          <a href="" className={this.pageIsSelected(page.selected)}>
            <span>
              <i className={`fa fa-${page.icon}`}></i>
              {page.name}
            </span>
          </a>
        </li>
      );
    });
  }

  render() {
    return (
      <div className="sidenav-wrapper">
        <ul className="sidenav">
          {this.pageListItems()}
        </ul>
      </div>
    );
  }
}

SideNav.propTypes = {
  pages: PropTypes.array.isRequired
};
