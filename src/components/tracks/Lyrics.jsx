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
        <Link to="/" className="btn btn-dark btn-md mb-3">
          Go Back
        </Link>
        <div className="card text-white bg-dark">
          <h5 className="card-header">
            {track.track_name} by {track.artist_name}
          </h5>
          <div className="card-body">
            <p className="card-text">{lyrics.lyrics_body}</p>
          </div>
        </div>
        <div>
          <ul className="list-group mt-3">
            <li className="list-group-item list-group-item-dark">
              <strong>Album Id : </strong>
              {track.album_id}
            </li>
            <li className="list-group-item list-group-item-dark">
              <strong>Song Genre : </strong>
              {track.primary_genres.music_genre_list.length !== 0
                ? track.primary_genres.music_genre_list[0].music_genre
                    .music_genre_name
                : "N/A"}
            </li>
            <li className="list-group-item list-group-item-dark">
              <strong>Explicit Words : </strong>
              {track.explicit === 0 ? "No" : "Yes"}
            </li>
            <li className="list-group-item list-group-item-dark">
              <strong>Release Date : </strong>
              {track.first_release_date}
            </li>
          </ul>
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
