import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

// actions
import handleToogleSidebar from '../actions/toggle-sidenav';

class SearchBar extends Component {

  handleOnFormSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top search-bar">
          <div className="search-bar-content-wrapper">
            <div className="search-bar-left">
              <i
                className="fa fa-bars sidenav-toogle-button"
                onClick={this.props.handleToogleSidebar}
                >
              </i>
              <a className="search-bar-brand">
                <img
                  alt="Brand"
                  className="collapsed-brand-logo"
                  src="assets/images/collapsed-youtube-logo-128.png"
                  />
                <img
                  alt="Brand"
                  className="expanded-brand-logo"
                  src="assets/images/expanded-youtube-logo-128.png"
                  />
              </a>
            </div>

            <form
              className="search-bar-center"
              onSubmit={this.handleOnFormSubmit}
              >
              <div className="input-group">
                <input
                  placeholder="Search"
                  className="form-control navbar-search-bar-input"
                  type="text"
                  />
                <span className="input-group-btn">
                  <button type="submit" className="btn navbar-search-bar-btn yt-button">
                    <i className="fa fa-search"></i>
                  </button>
                </span>
              </div>
            </form>

            <div className="search-bar-right">
              <button
                type="button"
                className="btn btn-default navbar-btn upload-button yt-button"
                >
                Upload
              </button>
              <a className="search-bar-user" href="#">
                <img
                  alt="Brand"
                  className="user-picture"
                  src="assets/images/google-user-picture.jpg"
                  />
              </a>
            </div>
          </div>
        </nav>
        <div className="its-a-trap"></div>
      </div>
    );
  }
}

SearchBar.propTypes = {
  handleToogleSidebar: PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({handleToogleSidebar}, dispatch);
}

export default connect(
	null,
  mapDispatchToProps
)(SearchBar);
