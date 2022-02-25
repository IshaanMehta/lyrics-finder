import React, { useState } from "react";

const Track = ({ track }) => {
  const [isMouseOver, setMouseOver] = useState(false);

  const handleMouseOver = () => {
    setMouseOver(true);
  };
  const handleMouseOut = () => {
    setMouseOver(false);
  };

  return (
    <div className="col-md-6">
      <div
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        className={
          isMouseOver ? "card border-info mb-3" : "card text-white bg-info mb-3"
        }
      >
        <div className={isMouseOver ? "card-body text-info" : "card-body"}>
          <h5 className="card-title">{track.track_name}</h5>
          <p className="card-text">
            <i className="fa-solid fa-music"></i>
            <strong> Artist </strong>: {track.artist_name}
            <br />
            <i class="fa-solid fa-compact-disc"></i>
            <strong> Album </strong>: {track.album_name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Track;
