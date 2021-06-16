/* eslint-disable */
import axios from 'axios';
import { userApiFailure, userApiRequest, userApiSuccess } from '../actions/index';
import header, { url } from './apiLink';

const login = user => async dispatch => {

  dispatch(userApiRequest());
  console.log("hello")
  axios.post(`${url}/auth/login`, user, header)
    .then(response => {
      const userRes = response.data;
      if (userRes.message === 'Login Successful') {
        dispatch(userApiSuccess(userRes));
        localStorage.setItem('user', JSON.stringify(userRes.user.name));
        window.location.replace('/projects');
      }
    })
    .catch(error => {
      const errorMsg = error.message;
      console.log(user)
      dispatch(userApiFailure(errorMsg));
    });
};

export default login;
