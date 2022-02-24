import React, { useContext } from "react";
import { GlobalContext } from "../../context";

function Tracks() {
  const { track_list } = useContext(GlobalContext);
  console.log(track_list);
  return <div>Tracks</div>;
}

export default Tracks;
