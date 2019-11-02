import { createSelector } from "reselect";

//playlist contsians urlPlaylist and currentUrl
const selectPlaylist = state => state.playlist;

export const selectUrlList = createSelector(
  [selectPlaylist],
  playlist => playlist.urlList
);

export const selectCurrentUrl = createSelector(
  [selectPlaylist],
  playlist => playlist.currentUrl
);
