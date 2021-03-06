import axios from "axios";
import React, { useEffect, useReducer } from "react";
import Reducer from "./Reducer";

const initialState = {
  track_list: [],
  heading: "",
  loading: true,
  error: null,
  // lyrics component
  lyrics: {},
  track: {},
  // search component
  trackTitle: ""
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
      // console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getTrackLyrics = async (id) => {
    try {
      const res = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${id}&apikey=${process.env.REACT_APP_MM_KEY}`
      );

      dispatch({
        type: "GET_LYRICS",
        payload: res.data.message.body.lyrics
      });
      // console.log(res.data);

      const trackRes = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${id}&apikey=${process.env.REACT_APP_MM_KEY}`
      );
      dispatch({
        type: "GET_TRACK",
        payload: trackRes.data.message.body.track
      });

      // console.log(trackRes);
    } catch (err) {
      console.log(err);
    }
  };

  const searchLyrics = async (song) => {
    try {
      dispatch({
        type: "LYRICS_SEARCH",
        payload: song
      });

      const res = await axios.get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${song}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`
      );

      dispatch({
        type: "SEARCH_RESULT",
        payload: res.data.message.body.track_list
      });

      // console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        track_list: state.track_list,
        heading: state.heading,
        lyrics: state.lyrics,
        track: state.track,
        getTopSongs,
        getTrackLyrics,
        searchLyrics
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
