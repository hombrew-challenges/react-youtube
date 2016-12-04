import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import SideNav from '../components/sidenav';
import Content from '../containers/content';

class BoddyWrapper extends Component {

  onSideNavToggleClass() {
    let toggled = '';
    toggled = this.props.sidenavState ? 'toggled' : '';
    return `body-wrapper ${toggled}`;
  }

  render() {
    return (
      <div>
        <div className={this.onSideNavToggleClass()}>
          <SideNav pages={this.props.pages}/>
          <Content/>
        </div>
      </div>
    );
  }
}

BoddyWrapper.propTypes = {
  sidenavState: PropTypes.bool.isRequired,
  pages: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    sidenavState: state.sidenavState,
    pages: state.pages
  };
}

export default connect(
	mapStateToProps
)(BoddyWrapper);
