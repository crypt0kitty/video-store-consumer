import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../App.css';
import { bubble as Menu } from 'react-burger-menu';
import { BiHome, BiFilm, BiSearchAlt, BiGroup} from 'react-icons/bi';

export default function Sidebar() {
   return(
        <Menu right>
            <h5 className="movie-title"> Movies On Demand</h5>
            <a id="home" className="menu-item" href="/"><BiHome /> Home</a>
            <a id="about" className="menu-item" href="/search"><BiSearchAlt /> Search</a>
            <a id="contact" className="menu-item" href="/library"><BiFilm /> Video Library</a>
            <a id="settings" className="menu-item" href="/customers"> <BiGroup /> Customer List</a>
       </Menu>
   )
}




