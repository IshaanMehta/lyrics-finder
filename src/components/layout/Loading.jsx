import React from "react";
import loadingHand from "./loadingHand.gif";

function Loading() {
  return (
    <div className="container-fluid loading-container">
      <img className="loading-img" src={loadingHand} alt="loading tracks" />
    </div>
  );
}

export default Loading;
