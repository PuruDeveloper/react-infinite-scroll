export const initialState = {
  user: null,
  userName: null,
};

export const actionTypes = {
  SET_USER: "SET_USER",
  DELETE_USER: "DELETE_USER",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
        userName: action.userName,
      };
    case "DELETE_USER": 
    return {
      ...state,
      user: null,
      userName:null
    }
    default:
      return state;
  }
};
