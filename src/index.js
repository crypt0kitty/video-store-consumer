import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BiSidebar } from 'react-icons/bi';

const Home = () => {
  return (
    <div>
      <App />
    </div>
  );
};

ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();

export default Home;
