// react
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

// pages
import Home from '../../pages/Home/Home'
import Tracking from '../../pages/Tracking/Tracking'

// styles
import './App.css';

function App() {
  return (
    <Router>
      <div className="App" >
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/tracking">
            <Tracking />
          </Route>
        </Switch>
      </div>
    </Router >
  )
}

export default App;
