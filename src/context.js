import axios from "axios";
import React, { useReducer } from "react";
import Reducer from "./Reducer";

const initialState = {
  track_list: [],
  heading: "Top 10 tracks",
  loading: true
};

// global context
export const GlobalContext = React.createContext(initialState);

// global context provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  //  Actions

  const getTopSongs = async () => {
    try {
      const res = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`
      );

      dispatch({
        type: "GET_TOP_SONGS",
        payload: res.data.message.body.track_list
      });
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        track_list: state.track_list,
        heading: state.heading,
        getTopSongs
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
