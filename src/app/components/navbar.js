import React, {Component, PropTypes} from 'react';

export default class NavBar extends Component {

  pageIsSelected(selected) {
    return selected ? 'selected' : '';
  }

  navbarPageListItems() {
    const navbarPages = this.props.pages.filter(page => page.nav === true);
    return navbarPages.map((page, index) => {
      return (
        <li
          key={index}
          className={this.pageIsSelected(page.selected)}
          >
          <a href={page.url}>{page.name}</a>
        </li>
      );
    });
  }

  render() {
    return (
      <div className="content-navbar">
        <nav className="navbar navbar-default content-navbar-fixed">
          <div className="container-fluid">
            <div className="navbar-body">
              <ul className="nav navbar-nav">
                {this.navbarPageListItems()}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

NavBar.propTypes = {
  pages: PropTypes.array.isRequired
};
