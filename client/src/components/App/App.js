// react
import React, { Component } from 'react';

// components
import Table from '../Table/Table';
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
      <Table />
      <Footer />
    </div>
  );
}

export default App;
