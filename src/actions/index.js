import ActionsType from "../components/actionType";

export const addProject = projectObj => {
  return (
    {
      type: 'CREATE_PROJECT',
      project: { ...projectObj }
    }
  )
}

export const removeProject = projectObj => {
  return (
    {
      type: 'REMOVE_PROJECT',
      id: projectObj.id,
    }
  );
}

export const setProjects = (projects) => ({
  type: ActionsType.SET_PROJECTS,
  payload: projects,
});

export const selectedProject = (project) => ({
  type: ActionsType.SELECT_PROJECTS,
  payload: project,
});
