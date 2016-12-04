import React, {Component, PropTypes} from 'react';

export default class VideoList extends Component {
  render() {
    if (this.props.playlist.length < 1) {
      return (
        <div className="loading-videos">Loading...</div>
      );
    }

    return (
      <div className="container video-list">
        {this.props.playlist.map(video => {
          return (
            <div
              key={video.snippet.resourceId.videoId}
              className="col-xs-12 col-sm-4 col-md-3 text-center"
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
    );
  }
}

VideoList.propTypes = {
  playlist: PropTypes.array.isRequired
};
