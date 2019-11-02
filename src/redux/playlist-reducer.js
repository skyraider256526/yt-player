const INITIAL_STATE = {
  urlList: [],
  currentUrl: null
};

export const UrllistReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_URL_TO_PLAYLIST":
      if (!state.urlList.length) {
        console.log(action.payload);

        return {
          urlList: [action.payload],
          currentUrl: action.payload
        };
      }
      return {
        ...state,
        urlList: [...state.urlList, action.payload]
      };
    case "CHANGE_CURRENT_URL":
      return {
        urlList: state.urlList.slice(1),
        currentUrl: state.urlList[1]
      };
    default:
      return state;
  }
};

// export default urlListReducer;
