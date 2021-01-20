import React, { useState, useEffect } from 'react';

import 'materialize-css/dist/css/materialize.min.css';

import './App.css';
import Customers from './components/Customers';

function App() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    /* fetch('https://api.themoviedb.org/3/movie/550?api_key=fab6e945ca8bd693a69acea57b30c0b9') */
    fetch('http://localhost:3000/customers')
      .then((res) => res.json())
      .then((customers) => setCustomers(customers));
  }, []);

  return <div className="App">{<Customers customers={customers} />}</div>;
}

export default App;
