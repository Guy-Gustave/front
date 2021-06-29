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
    const response = await axios.get('https://trackap.herokuapp.com/projects');
    dispatch(setProjects(response.data));
  };

  useEffect(() => {
    fetchProjects();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="affiche">
      <ProjectForm handleFetchProjects={fetchProjects}/>
      <ProjectComponent/>
    </div>
  );
};

const mapStateToProps = (state) => (
  {
    projects: state.allProjects,
  }
);

export default connect(mapStateToProps, null)(ProjectList);
