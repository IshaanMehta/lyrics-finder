import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark mb-4">
      <span className="navbar-brand mb-0 h1 mx-auto nav-heading">
        <Link to="/" className="navbar-brand">
          LyricFinder
        </Link>
      </span>
    </nav>
  );
}

export default Navbar;
