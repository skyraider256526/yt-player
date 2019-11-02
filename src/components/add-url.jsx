import React from "react";

import { connect } from "react-redux";

import { addUrlToPlaylist } from "../redux/playlist.action";

export const AddUrl = ({ dispatch }) => {
  //urlCheck1 for url copied from the addres bar, with http:// and without
  const urlCheck1 = url =>
    /http:\/\/www.youtube.com\/watch\?v=\w/.test(url) ||
    /www.youtube.com\/watch\?v=\w/.test(url);
  //urlCheck2 for url gotten by using sharing option in a video, with http:// and without
  const urlCheck2 = url =>
    /http:\/\/youtu.\D\/\w/.test(url) || /youtu.\D\/\w/.test(url);
  return (
    <input
      className="border border-success"
      type="text"
      placeholder="enter url here"
      onBlur={event => {
        const value = event.target.value;
        event.target.value = null;
        console.log("url Check :", urlCheck1(value) || urlCheck2(value));
        if (urlCheck1(value) || urlCheck2(value)) {
          return dispatch(addUrlToPlaylist(value));
        }
        if (value != "") {
          window.alert("enter a valid youtube url");
        }
      }}
    />
  );
};

// const mapDispatchToProps = dispatch => ({
//   addUrlToPlaylist: url => dispatch(addUrlToPlaylist(url))
// });

export default connect()(AddUrl);
