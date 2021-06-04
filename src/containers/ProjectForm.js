
import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import { addProject } from '../actions';
import '../App.css';

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
    let title = proj.title;
    let description = proj.description;
    let rates = proj.rates;
    const project = { title: title, description: description, rates: rates };
    const response = await axios.post('https://trackap.herokuapp.com/projects', project);
    props.submitNewProject(response.data);

    console.log('the project is   ' + title + 'the description  is ' + description, 'with rates' + rates);
  };

  const rate = ['select rates', '5', '4', '3', '2', '1']
  return (
    <div className="">
      <h2 className="formulaire">Add new project</h2>
      <form className="" onSubmit={handleSubmit}>
        <input type="text" className="itm" placeholder="Type new project here " onChange={handleChange} name='input' id='input' value={proj.title} />
        <textarea id="" className="desc px-4 py-2" cols="40" rows="2" placeholder="type description" onChange={handleChange} name='description' value={proj.description}></textarea>
        <select name="select" value={proj.rates} onChange={handleChange} className="items rat">
          {rate.map(el => <option key={el} value={el}>{el}</option>)}
        </select>
        <button type="submit" className="btn btn-primary btn-lg" >Submit</button>
      </form>
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
