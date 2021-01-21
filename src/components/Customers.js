import Customer from './Customer';
import React, { useState, useEffect } from 'react';

function Customers() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    /* data from: https://api.themoviedb.org/3/movie/550?api_key=fab6e945ca8bd693a69acea57b30c0b9 */
    fetch('http://localhost:3000/customers')
      // converting the data into json
      .then((response) => response.json())
      // received data as customers
      .then((customers) => setCustomers(customers));
  }, []);
  // console.log(customers);

  return (
    <div className="Customers">
      {customers.map((customer) => (
        <Customer key={customer.id} customer={customer} />
      ))}
    </div>
  );
}

export default Customers;
