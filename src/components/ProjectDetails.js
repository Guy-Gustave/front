import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { selectedProject } from '../actions/index';
import '../App.css';

const ProjectDetails = () => {
  const project = useSelector((state) => state.project);
  const {
    id, title, description, rates
  } = project;
  const { projectId } = useParams();
  const dispatch = useDispatch();

  const fetchProjectsDetail = async () => {
    const response = await axios.get(`https://trackap.herokuapp.com/projects/${projectId}`);
    dispatch(selectedProject(response.data));
  };
  useEffect(() => {
    if (projectId && projectId !== '') fetchProjectsDetail();
    // eslint-disable-next-line 
  }, [projectId]);
  return (
    <div className="ui grid container">
      <h1>
        Back to  
          <Link to="/"> ProjectList </Link>
      </h1>
      {Object.keys(project).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="detail-project">
          <div className="desc">
            <h1 className="tag-price">Id= {id} </h1>
            <h1>The name of project is {title}</h1>
            <h2 className="tag-price">Description: {description} </h2>
            <h3 className="tag-category">The rating:{rates}</h3>

          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
