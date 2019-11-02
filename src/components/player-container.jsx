import React from "react";

import { connect } from "react-redux";

import { selectCurrentUrl } from "../redux/playlist.selector";
import { changeCurrentUrl } from "../redux/playlist.action";

import YouTube from "react-youtube";

export const PlayerContainer = ({ currentUrl, dispatch }) => {
  const opts = {
    // height: '390',
    // width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  };
  if (!currentUrl) {
    return (
      <div className="flex-fill text-center pt-5 border border-success">
        Please enter a url
      </div>
    );
  }
  return (
    <div className="flex-fill">
      <YouTube
        videoId={currentUrl.match(/\?v=(\w*)/).pop()}
        opts={opts}
        onReady={event => event.target.playVideo()}
        //once the video is ended the event is triggered to change the current video in state
        onEnd={event => {
          console.log(event, "finished", event);
          dispatch(changeCurrentUrl());
        }}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  currentUrl: selectCurrentUrl(state)
});

// const mapDispatchToProps = dispatch => ({});
export default connect(mapStateToProps)(PlayerContainer);
