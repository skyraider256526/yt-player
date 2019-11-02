import React from "react";

import { connect } from "react-redux";

import { selectUrlList } from "../redux/playlist.selector";

import { PlaylistItem } from "./playlist-item";

export const Playlist = ({ urlList }) => {
  if (!urlList.length) {
    return (
      <div
        className=" align-self-stretch vh-100 text-center pt-5 border border-success"
        style={{ minWidth: "100%" }}
      >
        Please enter a url
      </div>
    );
  }
  return (
    <div
      className=" align-self-stretch vh-100 border border-success"
      style={{ minWidth: "50vw" }}
    >
      <ul className="list-group">
        {urlList.map(url => (
          <PlaylistItem url={url} />
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  urlList: selectUrlList(state)
});

export default connect(mapStateToProps)(Playlist);
