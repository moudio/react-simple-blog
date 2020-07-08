import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={HomePage} />
      </div>
    </Router>
  );
}

export default App;
