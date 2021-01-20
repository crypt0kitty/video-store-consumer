import React from 'react';
import Customer from './Customer';

const Customers = (props) => {
  const { customers = [] } = props;
  return (
    <div>
      {customers.map((customer) => (
        <Customer key={customer.id} customer={customer} />
      ))}
    </div>
  );
};

export default Customers;
