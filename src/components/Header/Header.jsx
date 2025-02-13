import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header-outer-container">
      <div className="Header-container">
        <div className="Header-left">
          <ul>
            <li>Netflix</li>
            <li>Home</li>
            <li>TVShows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>MyList</li>
            <li>Browes by Languages</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
