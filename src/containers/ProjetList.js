import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setProjects } from '../actions/index';
import ProjectComponent from '../components/ProjectComponent';
import ProjectForm from './ProjectForm';

const ProjectList = () => {
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
      <ProjectForm />
      <ProjectComponent />
    </div>
  );
};

export default ProjectList;
