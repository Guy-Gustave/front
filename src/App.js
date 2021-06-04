import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import ProjectList from './containers/ProjetList';
import Navbar from './components/Navbar';
import ProjectDetails from './components/ProjectDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={ProjectList} />
          <Route path="/project/:projectId" exact component={ProjectDetails} />
          <Route>404 Not Found</Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
