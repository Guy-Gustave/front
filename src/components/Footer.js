/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="foot">
      <div className="f">
        <Link to="/" role="button">Home</Link>
      </div>
      
      <div className="f"> 
        <Link to="/projects" role="button">List projects</Link>
      </div>
      
      <div className="f">
        <Link to="/new" role="button">create project</Link>
      </div>
    </div>
  );
};

export default Footer;
