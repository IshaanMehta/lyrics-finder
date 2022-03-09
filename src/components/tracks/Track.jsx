import React, { useState } from "react";
import { Link } from "react-router-dom";

const Track = ({ track }) => {
  const [isMouseOver, setMouseOver] = useState(false);

  const handleMouseOver = () => {
    setMouseOver(true);
  };
  const handleMouseOut = () => {
    setMouseOver(false);
  };

  return (
    <div className="col-md-6 h-90">
      <div
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        className={
          isMouseOver
            ? "card border-dark mb-3 on-card-container card-container"
            : "card text-white bg-dark mb-3 card-container"
        }
      >
        <div className={isMouseOver ? "card-body text-dark" : "card-body"}>
          <h5 className="card-title">{track.track_name}</h5>
          <p className="card-text">
            <i className="fa-solid fa-music"></i>
            <strong> Artist </strong>: {track.artist_name}
            <br />
            <i className="fa-solid fa-compact-disc"></i>
            <strong> Album </strong>: {track.album_name}
          </p>
          <Link
            to={`lyrics/track/${track.track_id}`}
            className={
              isMouseOver ? "btn btn-dark btn-block" : "btn btn-light btn-block"
            }
          >
            <i className="fa-solid fa-scroll"></i> View Lyrics
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Track;
