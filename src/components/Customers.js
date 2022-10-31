import Customer from './Customer';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);
  const BASE_API_URL = process.env.NODE_ENV.trim() === 'production' ? 'https://video-store-backend-01.herokuapp.com' : 'http://127.0.0.1:3000';

  useEffect(() => {
    axios      
      .get(`${BASE_API_URL}/customers`)
      // converting the data into json
      .then((response) => {
        setCustomers(response.data);
        // console.log(response);
      });
    // received data as customers
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
