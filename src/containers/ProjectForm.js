/* eslint-disable */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import { addProject } from '../actions';
import '../App.css';
import { url } from '../apiRequests/apiLink';
import ProjetList from './ProjetList';

const ProjectForm = (props) => {
  const [proj, setProj] = useState(
    {
      id: Math.floor(Math.random() * 500),
      title: '',
      description: '',
      rates: 'rate',
    },
  );

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'input':
        setProj({ title: e.target.value, description: proj.description, rates: proj.rates });
        break;

      case 'description':
        setProj({ title: proj.title, description: e.target.value, rates: proj.rates });
        break;
      case 'select':
        setProj({ title: proj.title, description: proj.description, rates: e.target.value });
        break;
      default:
    }
  };

  // const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title } = proj;
    const { description } = proj;
    const { rates } = proj;
    const project = { title, description, rates };
    await axios.post(`${url}/projects`, project)
      .then(response => {
        // console.log(response)
        if( response.data.status == "created"){
          // props.submitNewProject(response.data.project);
          props.handleFetchProjects();
        }
      })
      .catch((err) => {
        console.log("This error is inside the catch", err);
      });
    // 
  };

  const rate = ['select rates', '5', '4', '3', '2', '1'];
  return (
    <div className="">
      <h2 className="formulaire">Add new project</h2>
      <form className="" onSubmit={handleSubmit}>
        <input type="text" className="itm" placeholder="Type new project here " onChange={handleChange} name="input" id="input" value={proj.title} />
        <textarea id="" className="desc itm px-4 py-2" cols="40" rows="2" placeholder="type description" onChange={handleChange} name="description" value={proj.description} />
        <select name="select" value={proj.rates} onChange={handleChange} className="itm items rat">
          {rate.map((el) => <option key={el} value={el}>{el}</option>)}
        </select>
        <button type="submit" className="btn btn-primary btn-lg">Submit</button>
      </form>
      <ProjetList />
    </div>
  );
};

ProjectForm.propTypes = {
  submitNewProject: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => (
  {
    submitNewProject: (proj) => {
      dispatch(addProject(proj));
    },
  }
);

export default connect(null, mapDispatchToProps)(ProjectForm);
