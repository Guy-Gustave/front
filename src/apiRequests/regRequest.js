/* eslint-disable */
import axios from 'axios';
import { userApiFailure, userApiRequest, userApiSuccess } from '../actions//index';
import header, { url } from './apiLink';

const registration = userObj => dispatch => {
  dispatch(userApiRequest());
  axios.post(`${url}/auth/signup`, userObj, header)
    .then(response => {
      const userRes = response.data;
      dispatch(userApiSuccess(userRes));
      // console.log(userRes);
    })
    .catch(error => {
      const errorMsg = error.message;
      dispatch(userApiFailure(errorMsg));
    });
};

export default registration;
