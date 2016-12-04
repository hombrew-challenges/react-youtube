import React, {Component, PropTypes} from 'react';

export default class VideoList extends Component {

  onSideNavStateChange() {
    const gclass = this.props.sidenavState === true ? 'col-lg-3' : 'col-lg-2';
    return `col-xs-6 col-sm-4 col-md-3 ${gclass} text-center col-video`;
  }

  render() {
    if (this.props.playlist.length < 1) {
      return (
        <div className="loading-videos">Loading...</div>
      );
    }

    return (
      <div className="container-fluid video-list">
        <div className="row">
          {this.props.playlist.map(video => {
            return (
              <div
                key={video.snippet.resourceId.videoId}
                className={this.onSideNavStateChange()}
                >
                <div className="video">
                  <div className="thumb">
                    <img src={video.snippet.thumbnails.high.url} alt="video"/>
                  </div>
                  <div className="title">
                    <p>{video.snippet.title}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

VideoList.propTypes = {
  sidenavState: PropTypes.bool.isRequired,
  playlist: PropTypes.array.isRequired
};
