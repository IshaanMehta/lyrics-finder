import axios from "axios";
import React, { useReducer } from "react";
import Reducer from "./Reducer";

const initialState = {
  track_list: [
    { track: { track_name: "abc" } },
    { track: { track_name: "xyz" } }
  ],
  heading: "Top 10 tracks"
};

// global context
export const GlobalContext = React.createContext(initialState);

// global context provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  //  Actions

  const getTopSongs = async () => {
    const res = axios.get(
      `https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1`
    );
  };

  return (
    <GlobalContext.Provider
      value={{
        track_list: state.track_list,
        heading: state.heading
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
