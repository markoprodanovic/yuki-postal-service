// react
import React, { Component } from 'react';

// components
import TableFeature from '../TableFeature/TableFeature';
import Footer from '../Footer/Footer';

// styles
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <img className="logo" src="logo.png" />
        <img className="live" src="https://media.giphy.com/media/d7SnWNs1hyW2hNrFRn/giphy.gif" />
      </div>
      <TableFeature />
      <Footer />
    </div>
  );
}

export default App;
