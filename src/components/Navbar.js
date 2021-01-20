import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
// import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">
          Logo
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="sass.html">Home</a>
          </li>
          <li>
            <a href="badges.html">Videos</a>
          </li>
          <li>
            <a href="collapsible.html">Video Library</a>
          </li>
          <li>
            <a href="collapsible.html">Customers</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
