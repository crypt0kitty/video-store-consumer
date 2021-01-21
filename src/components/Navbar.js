import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import './style.css';

import Logo from '../movieLogo.png';

const Navbar = () => {
  return (
    <nav className="#26a69a teal lighten-1 z-depth-3">
      <Link to="/">
        <img src={Logo} alt="Logo" className="brand-logo" />
      </Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        {/* search bar ends */}
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
        <li>
          <Link to="/library">Video Library</Link>
        </li>
        <li>
          <Link to="/customers">Custormer List</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
