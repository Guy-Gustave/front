import { combineReducers } from '@reduxjs/toolkit';
import { projectReducer, projects, selectedProjectreducer } from './project';
import userReducer from './userReducer';

const allReducers = combineReducers({
  projetsList: projects,
  allProjects: projectReducer,
  project: selectedProjectreducer,
  user: userReducer,
});

export default allReducers;
