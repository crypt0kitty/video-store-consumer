import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
/* what part of the code should be nested inside the router */
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import Customers from './components/Customers';
import Sidebar from './components/Sidebar';
import VideoSearch from './components/VideoSearch';
import VideoLibrary from './components/VideoLibrary';
import Banner from './movieBanner.png';
import Checkout from './components/Checkout.js'

export default function App() {
  const [currCard, setCurrCard] = useState({})

  return (
    <Router>
      <Checkout text = {currCard.text} title = {currCard.title} />
      <Sidebar />
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/library">
            <VideoLibrary currCard = {currCard} setCurrCard = {setCurrCard}/>
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

function Home() {
  return (
    <>
      <div id="index-banner" className="parallax-container">
        <div className="section no-pad-bot">
          <div className="container">
            <h1 className="header center teal-text text-lighten-2"></h1>
          </div>
        </div>
        <img src={Banner} alt="Logo" className="parallax" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Why Rent With Us?</h5>
            <p className="grey-text text-lighten-4">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet
            </p>
          </div>
          <h5 className="white-text"></h5>
        </div>
      </div>
      {/* </div> */}
      <div className="footer-copyright, page-footer">
        <div className="container">© 2021 Sandy Vasquez powered by Heroku</div>
      </div>
    </>
  );
}
