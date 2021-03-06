import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './containers/Login';
import Register from './containers/Register';
import ProjectList from './containers/ProjetList';
import ProjectDetails from './components/ProjectDetails';
import ProjectForm from './containers/ProjectForm';
// import history from './components/History'

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/signup" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/projects" exact component={ProjectList} />
      <Route path="/new" component={ProjectForm} />
      <Route path="/project/:projectId" exact component={ProjectDetails} />
    </Switch>
  </Router>
);

export default Routes;
