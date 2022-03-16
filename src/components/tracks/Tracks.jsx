import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context";
import Loading from "../layout/Loading";
import Track from "./Track";

function Tracks() {
  const { track_list, heading, getTopSongs } = useContext(GlobalContext);

  useEffect(() => {
    getTopSongs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return track_list.length === 0 ? (
    <Loading />
  ) : (
    <>
      <h3 className="text-center mb-4">{heading}</h3>
      <div className="row">
        {track_list.map((item) => {
          return <Track key={item.track.track_id} track={item.track} />;
        })}
      </div>
    </>
  );
}

export default Tracks;
