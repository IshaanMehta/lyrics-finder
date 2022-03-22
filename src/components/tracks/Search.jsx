import React, { useContext, useState } from "react";
import { GlobalContext } from "../../context";

function Search() {
  const { searchLyrics } = useContext(GlobalContext);

  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setSearch(value);
    // console.log(search);
  };

  const handleSubmit = (event) => {
    searchLyrics(search);
    // setSearch("");
    event.preventDefault();
  };

  return (
    <div className="card card-body mb-4 p-4">
      <h1 className="display-4 text-center">
        <i className="fa-solid fa-music"></i> Search for a Song
      </h1>
      <p className="lead text-center">Get any song lyrics</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            className="form-control form-control-lg"
            placeholder="Search Song"
            name="trackTitle"
            onChange={handleChange}
            value={search}
          />
        </div>
        <button className="btn btn-info btn-lg btn-block" type="submit">
          Get Song Lyrics
        </button>
      </form>
    </div>
  );
}

export default Search;
