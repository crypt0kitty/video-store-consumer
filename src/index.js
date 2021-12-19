import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

const Home = () => {
  return (
    <div>
      <App />
      < Footer />
    </div>
  );
};

ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();

export default Home;
