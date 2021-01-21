import React from 'react';
import '../index.css';

const Customer = ({
  customer: {
    id,
    name,
    registered_at: registeredAt,
    address,
    city,
    state,
    postal_code: postalCode,
    phone,
    account_credit: accountCredit,
    videos_checked_out_count: videosCheckedOutCount,
  },
}) => (
  <div className="row">
    <div className="col s12 m6">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">
            {id} - {name} - {registeredAt}
          </span>
          <p>
            I am a very simple card. I am good at containing small bits of
            information. I am convenient because I require little markup to use
            effectively.
          </p>
        </div>
        <div className="card-action">
          <a href="#">Account Credits - {accountCredit}</a>
          <a href="#">Videos Checked Out - {videosCheckedOutCount}</a>
        </div>
      </div>
    </div>
  </div>
);

export default Customer;
