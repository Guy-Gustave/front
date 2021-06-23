/* eslint-disable */
import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import axios from 'axios';
// import { useHistory } from 'react-router-dom';
import { setProjects } from '../actions/index';
import ProjectComponent from '../components/ProjectComponent';
import ProjectForm from './ProjectForm';

const ProjectList = (props) => {
  const dispatch = useDispatch();

  const fetchProjects = async () => {
    const response = await axios.get('http://localhost:3001/projects');
    dispatch(setProjects(response.data));
  };

  // const history = useHistory();
  // if (user === null) {
  //   history.push('/login');
  // }

  useEffect(() => {
    fetchProjects();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="affiche">
      <ProjectForm />
      <ProjectComponent projects={props.projects.projects} />
    </div>
  );
};

const mapStateToProps = (state) => (
  {
    projects: state.allProjects,
  }
);

export default connect(mapStateToProps, null)(ProjectList);
