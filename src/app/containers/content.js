import React, {Component} from 'react';
import {connect} from 'react-redux';

class Content extends Component {

  render() {
    return (
      <div className="content-wrapper">
        I'm the content
      </div>
    );
  }
}

// Content.propTypes = {
//   handleToogleSidebar: PropTypes.func.isRequired
// };

// mapStateToProps()

export default connect(
	null
)(Content);
