import ReactDOM from 'react-dom';

import React from 'react';

import '../index.css';


export default function Main() {
    return(
        <div class="main-text">
        <h5>Why Rent With Us?</h5>
          There are many variations of passages of Lorem Ipsum available,
          but the majority have suffered alteration in some form, by
          injected humour, or randomised words which don't look even
          slightly believable. If you are going to use a passage of Lorem
          Ipsum, you need to be sure there isn't anything embarrassing
          hidden in the middle of text. All the Lorem Ipsum generators on
          the Internet
        </div>
    )
 }

 ReactDOM.render(<Main />, document.getElementById('main'));

 