import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
// import ProjectList from './containers/ProjetList';
import Navbar from './components/Navbar';
import Routes from './Routes';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;
