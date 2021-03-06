import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavbarTop from './components/Navbar/Navbar';
import History from './components/History/History';
import MagicEightBall from './components/MagicBall/MagicBall';


function App() {
  return (
    <div className="backgroundGradient">
    <Router>
      <NavbarTop />
      <Switch>
        <Route exact path='/'>
          <MagicEightBall />
        </Route>
        <Route exact path='/history'>
          <History />
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
