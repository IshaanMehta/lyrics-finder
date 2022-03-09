import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context";

const Lyrics = () => {
  let params = useParams();
  const { getTrackLyrics } = useContext(GlobalContext);

  useEffect(() => {
    getTrackLyrics(params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <h1>Lyrics</h1>;
};

export default Lyrics;
