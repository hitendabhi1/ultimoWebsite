import React, { Component } from "react";
import ReactPlayer from "react-player";

// css
import "../../style/homePage/videoComponent.scss";
class VideoComponent extends Component {
  state = {};
  render() {
    return (
      <ReactPlayer
        className='react-player'
        controls={false}
        url='https://www.youtube.com/watch?v=jU8sOlCfa2I'
        width='100%'
        height='100%'
      />
    );
  }
}

export default VideoComponent;
