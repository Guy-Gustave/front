import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../App.css';

const ProjectComponent = () => {
  const projects = useSelector((state) => state.allProjects.projects);
  
  const renderList = projects.map((project) => {
    const {
      id, title, description, rates
    } = project;

      return (
        <div className="ui four column comp" key={id}>
          <Link to={`/project/${id}`}>

            <div className="projet ">
              <h1>{id} :{title}</h1>
              <div className="header">{description}</div>
              <div className="content">
                <div className="meta">{rates}</div>
              </div>
            </div>
          </Link>
        </div>
      );
    }
  );

  return (
    renderList
  );
};

export default ProjectComponent;
