import Customer from './Customer';
import React, { useState, useEffect } from 'react';
// import axios from 'axios';

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/customers')
      // converting the data into json
      .then((response) => response.json())
      // received data as customers
      .then((customers) => setCustomers(customers));
  }, []);

  return (
    <div className="container">
      <div className="card-list-cus">
        {customers.map((customer) => (
          <Customer key={customer.id} customer={customer} />
        ))}
      </div>
    </div>
  );
};

export default CustomerList;
