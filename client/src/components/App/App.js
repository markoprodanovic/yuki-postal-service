// react
import React, { Component } from 'react';

// components
import TrackingInput from '../TrackingInput/TrackingInput';
import TableFeature from '../TableFeature/TableFeature';
import Footer from '../Footer/Footer';

// styles
import './App.css';

const App = () => {
  return (
    <div className="App">
      <img className="logo" src="logo.png" />
      <TrackingInput />
      <TableFeature />
      <Footer />
    </div>
  );
}

export default App;
