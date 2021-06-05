import { combineReducers } from '@reduxjs/toolkit';
import { projectReducer, projects, selectedProjectreducer } from './project';

const allReducers = combineReducers({
  projetsList: projects,
  allProjects: projectReducer,
  project: selectedProjectreducer,
});

export default allReducers;
