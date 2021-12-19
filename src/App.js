import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
/* what part of the code should be nested inside the router */
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import Customers from './components/Customers';
import Sidebar from './components/Sidebar';
import Home from './components/Home';

import VideoSearch from './components/VideoSearch';
import VideoLibrary from './components/VideoLibrary';
import React from 'react';
import Footer from './components/Footer'

export default function App() {
  return (

    <Router>
      <Sidebar />
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/library">
            <VideoLibrary />
          </Route>
          <Route path="/customers">
            <Customers />
            <br></br> <br></br>
          </Route>
          <Route path="/search">
            <VideoSearch />
          </Route>
          <Route path="/">
          <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}











