import React from "react";

import AddUrl from "../components/add-url";

import PlayerContainer from "../components/player-container";

import Playlist from "../components/playlist";

export class Player extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="d-flex">
          <div className="d-flex flex-column">
            <AddUrl />
            <PlayerContainer />
          </div>
          <Playlist />
        </div>
      </React.Fragment>
    );
  }
}

export default Player;
