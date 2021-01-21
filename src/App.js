import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
/* what part of the code should be nested inside the router */
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import Customers from './components/Customers';
import Navbar from './components/Navbar';
import VideoSearch from './components/VideoSearch';
import Banner from './movieBanner.png';

export default function App() {
  return (
    <Router>
      <Navbar />
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/library">
            <VideoLibrary />
          </Route>
          <Route path="/customers">
            <h2>All Customers</h2>
            <Customers />
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
    </>
  );
}
function VideoLibrary() {
  return <h2>All Movies</h2>;
}
function MovieSearch() {
  return <h2>Search</h2>;
}
