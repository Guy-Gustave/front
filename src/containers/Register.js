/* eslint-disable */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import registration from '../apiRequests/regRequest';
import RegisterStyles from '../styles/RegisterStyles.module.css';

const Register = props => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [username, setUsername] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = event => {
    if (event.target.name === 'name') {
      setName(event.target.value);
    } else if (event.target.name === 'email') {
      setEmail(event.target.value);
    } else if (event.target.name === 'username') {
      setUsername(event.target.value);
    } else {
      setPassword(event.target.value);
    }
  };

  const handleRegister = () => {
    const { history } = props;
    history.push('/airlinesList');
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(registration({
      name,
      email,
      password,
    }));
    if (email || password !== '') {
      setErrorMsg('');
      handleRegister();
    } else {
      setErrorMsg('Please, enter valid credentials!');
    }
  };

  const validateForm = () => {
    const x = document.forms.name.value;
    if (x === '') {
      // eslint-disable-next-line
      alert('All fields must be filled out');
      return false;
    }
    return true;
  };

  return (
    <div data-testid="container">
      <form onSubmit={validateForm} className={RegisterStyles.registerForm} data-testid="form">
        <Link className={RegisterStyles.homeLink} to="/">
          <button type="button" className={`${RegisterStyles.homeBtn} btn`}>Home</button>
        </Link>
        <label htmlFor="name" className="text-left">
          Name:
          <br />
          <input type="text" name="name" id="name" placeholder="Enter your name" onChange={handleChange} value={name.name} />
        </label>
        <br />
        {/* <label htmlFor="username" className="text-left">
          Username:
          <br />
          <input type="text" name="username" id="username" placeholder="Enter your username" onChange={handleChange} value={username.username} />
        </label> */}
        <br />
        <label htmlFor="email" className="text-left">
          Email:
          <br />
          <input type="text" name="email" id="email" placeholder="Enter your email" onChange={handleChange} value={email.email} />
        </label>
        <br />
        <label htmlFor="password" className="text-left">
          Password:
          <br />
          <input type="password" name="password" id="password" placeholder="Enter your password" onChange={handleChange} value={password.password} />
        </label>
        <br />
        <button type="submit" className={`${RegisterStyles.btn} btn`} onClick={handleSubmit}>Register</button>
        <div>
          <span>Already have an account? </span>
          <Link to="/login">Login</Link>
        </div>
        {errorMsg === '' ? '' : <h3 className="text-danger">{errorMsg}</h3>}
      </form>
    </div>
  );
};

Register.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
};

export default Register;
