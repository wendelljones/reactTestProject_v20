import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/header.js';
import Footer from './components/footer.js';
import GoogleMapFor20 from './components/maps.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='appContainer'>
    <Header />
    <GoogleMapFor20 />
    <Footer />

  </div>
)
