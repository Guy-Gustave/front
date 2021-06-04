import ActionsType from "../coomponents/actionType";

const initialState = {
  projects: [
  ],
};

export const projects = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      return [...state, action.project];
    case 'REMOVE_PROJECT':
      return [...state.filter((project) => action.id !== project.id)];
    default:
      return state;
  }
};

export const projectReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionsType.SET_PROJECTS:
      return { ...state, projects: payload };

    default:
      return state;
  }
};

export const selectedProjectreducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionsType.SELECT_PROJECTS:
      return { ...state, ...payload };
    default:
      return state;
  }
};