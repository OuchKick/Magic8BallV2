import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import History from './components/History/History';


function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path ='/History'>
        <History/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
