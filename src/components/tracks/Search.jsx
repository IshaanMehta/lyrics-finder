import React, { useState } from "react";

function Search() {
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setSearch(value);
    console.log(search);
  };

  return (
    <div className="card card-body mb-4 p-4">
      <h1 className="display-4 text-center">
        <i className="fa-solid fa-music"></i> Search for a Song
      </h1>
      <p className="lead text-center">Get any song lyrics</p>
      <form>
        <div className="form-group">
          <input
            className="form-control form-control-lg"
            placeholder="Search Song"
            name="trackTitle"
            onChange={handleChange}
            value={search}
          />
        </div>
      </form>
    </div>
  );
}

export default Search;
