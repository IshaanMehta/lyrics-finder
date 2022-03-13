import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { GlobalContext } from "../../context";
import Loading from "../layout/Loading";

const Lyrics = () => {
  let params = useParams();
  const { getTrackLyrics, lyrics, track } = useContext(GlobalContext);

  useEffect(() => {
    getTrackLyrics(params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (
    track === undefined ||
    lyrics === undefined ||
    Object.keys(track).length === 0 ||
    Object.keys(lyrics).length === 0
  ) {
    return <Loading />;
  } else {
    return (
      <>
        <Link to="/" className="btn btn-dark btn-sm mb-4">
          Go Back
        </Link>
        <div className="card">
          <div className="card-header">
            {track.track_name} by {track.artist_name}
          </div>
        </div>
      </>
    );
  }

  // return Object.keys(track) === 0 ? (
  //   <Loading />
  // ) : (
  //   <>
  //     <Link to="/" className="btn btn-dark btn-sm mb-4">
  //       Go Back
  //     </Link>
  //     <div className="card">
  //       <div className="card-header">
  //         {track.track_name} by {track.artist_name}
  //       </div>
  //     </div>
  //   </>
  // );
};

export default Lyrics;
