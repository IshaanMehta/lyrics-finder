const Reducer = (state, action) => {
  switch (action.type) {
    case "GET_TOP_SONGS":
      return {
        ...state,
        track_list: action.payload,
        heading: "TOP 10 SONGS",
        loading: false
      };
    case "GET_LYRICS":
      return {
        ...state,
        lyrics: action.payload,
        loading: false
      };
    case "GET_TRACK":
      return {
        ...state,
        track: action.payload,
        loading: false
      };
    case "LYRICS_SEARCH":
      return {
        ...state,
        trackTitle: action.payload,
        track_list: [],
        loading: true
      };
    case "SEARCH_RESULT":
      return {
        ...state,
        track_list: action.payload,
        heading: "Search Result",
        loading: false
      };
    case "FETCH_ERROR":
      return {
        ...state,
        error: action.payload,
        loading: true
      };

    default:
      return state;
  }
};

export default Reducer;
