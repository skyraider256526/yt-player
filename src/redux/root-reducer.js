import { combineReducers } from "redux";

import { UrllistReducer } from "./playlist-reducer";

export const rootReducer = combineReducers({
  playlist: UrllistReducer
});

export default rootReducer;
