import React from "react";
import loadingFish from "./loadingFish.gif";

function Loading() {
  return (
    <div className="loading-container">
      <img className="loading-img" src={loadingFish} alt="loading tracks" />
    </div>
  );
}

export default Loading;
