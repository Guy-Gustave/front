import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Home = () => (
  <div className="home">
    <h1 className="">Welcome</h1>
    <div className="home">
      <Link to="/login" className="btn-">
        <button type="button" className="btn-">Login</button>
      </Link>
      <Link to="/signup" className="btn-">
        <button type="button" className="btn-">Register</button>
      </Link>
    </div>
  </div>
);

export default Home;
