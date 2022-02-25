const Reducer = (state, action) => {
  switch (action.type) {
    case "GET_TOP_SONGS":
      return {
        ...state,
        track_list: action.payload,
        loading: false
      };

    default:
      return state;
  }
};

export default Reducer;
