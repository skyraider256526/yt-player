export const addUrlToPlaylist = url => ({
  type: "ADD_URL_TO_PLAYLIST",
  payload: url
});

export const changeCurrentUrl = () => ({
  type: "CHANGE_CURRENT_URL"
  //   payload: url
});
