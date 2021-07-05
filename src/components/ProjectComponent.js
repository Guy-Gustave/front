/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
// import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../App.css';

const ProjectComponent = (props) => {
  // const projects = useSelector((state) => state.allProjects.projects);
  let renderList = null;
  if (props.projects.projects.length > 0 ) {
    renderList = props.projects.projects.map((project) => {
      const {
        id, title, description, rates,
      } = project;

      return (
        <div className="ui four column comp" key={id}>
          <Link to={`/project/${id}`} style={{textDecoration:'none'}}>

            <div className="projet ">
              <h1>
                {id}
                {') '}
                {/* Title:{' '}   */}
                {title}
              </h1>
              <div className="header">{description}</div>
              <div className="content">
                <div className="meta">{rates}</div>
              </div>
            </div>
          </Link>
        </div>
      );
    });
  }

  return (
    renderList
  );
};

let mapStateToProps = (state) => {
  return {
    projects: state.allProjects,
  };
};

export default connect(mapStateToProps, null)(ProjectComponent);
