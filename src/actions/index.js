import {
  ActionsType,
  LOGOUT_USER,
  USER_API_FAILURE,
  USER_API_REQUEST,
  USER_API_SUCCESS,
} from '../components/actionType';

export const addProject = (projectObj) => (
  {
    type: 'CREATE_PROJECT',
    project: { ...projectObj },
  }
);

export const removeProject = (projectObj) => (
  {
    type: 'REMOVE_PROJECT',
    id: projectObj.id,
  }
);

export const setProjects = (projects) => ({
  type: ActionsType.SET_PROJECTS,
  payload: projects,
});

export const selectedProject = (project) => ({
  type: ActionsType.SELECT_PROJECTS,
  payload: project,
});

export const userApiRequest = () => ({
  type: USER_API_REQUEST,
});

export const userApiSuccess = (data) => ({
  type: USER_API_SUCCESS,
  payload: data.user.name,
});

export const userApiFailure = (error) => ({
  type: USER_API_FAILURE,
  payload: error,
});

export const logoutUserAction = () => ({
  type: LOGOUT_USER,
});
