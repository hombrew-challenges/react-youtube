import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

// components
import NavBar from '../components/navbar';
import ContentBody from '../components/content-body';

class Content extends Component {

  render() {
    return (
      <div className="content-wrapper">
        <NavBar pages={this.props.pages}/>
        <ContentBody/>
      </div>
    );
  }
}

Content.propTypes = {
  pages: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    pages: state.pages
  };
}

export default connect(
	mapStateToProps
)(Content);
