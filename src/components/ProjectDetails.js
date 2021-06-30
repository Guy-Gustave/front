/* eslint-disable */
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { selectedProject } from '../actions/index';
import '../App.css';
import TaskList from '../containers/TaskList';
import { url } from '../apiRequests/apiLink';

const ProjectDetails = (props) => {
  const project = useSelector((state) => state.project);
  const {
    id, title, description, rates,
  } = project;
  const { projectId } = useParams();
  const dispatch = useDispatch();

  // url ='https://trackap.herokuapp.com/projects'

  const fetchProjectsDetail = async () => {
    const response = await axios.get(`${url}/projects/${projectId}`);
    dispatch(selectedProject(response.data));

  };
  useEffect(() => {
    if (projectId && projectId !== '') fetchProjectsDetail();
  }, [projectId]);
  return (
    <div className="ui grid container">
      <h1>
        Back to 
        <Link to="/projects"> ProjectList </Link>
      </h1>
      {Object.keys(project).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="detail-project">
          <div className="desc">
            <h1 className="tag-price">
              Id=
              {id}
            </h1>
            <h2>
              Project's title:
              <span>{title}</span>
            </h2>
            <h3 className="tag-price">
              Description:
              {description}
            </h3>
            <h3 className="tag-category">
              The rating:
              {rates}
            </h3>

          </div>
          <div className="tas">
            <TaskList projectId = {projectId}/>
          </div>

        </div>
      )}

    </div>
  );
};

export default ProjectDetails;
