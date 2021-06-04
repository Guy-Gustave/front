import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import axios from 'axios';
import { setProjects } from '../actions/index';
import ProjectComponent from '../components/ProjectComponent';
import ProjectForm from './ProjectForm';
// import { projects } from '../reducers/project';

const ProjectList = (props) => {
  const dispatch = useDispatch();

  // const projects = useSelector((state) => state.allProjects.projects);
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
      <ProjectComponent projects = {props.projects.projects}/>
    </div>
  );
};

const mapStateToProps = (state) => {
  return (
    {
      projects: state.allProjects,
    }
  );
} 

export default connect(mapStateToProps, null)(ProjectList);
