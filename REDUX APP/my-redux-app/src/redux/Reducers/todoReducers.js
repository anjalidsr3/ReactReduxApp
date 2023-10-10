// import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, EDIT_TODO } from "../redux/Actions/TodoAction";

const initialState = {
  list: [],
};

 export const todoReducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        list: [
          ...state.list,
          { name: action.payload, id: new Date(), ischecked: false },
        ],
      };
    case "DELETE_TODO":
      return {
        list: state.list.filter((todo) => todo.id !== action.payload),
      };
    case "TOGGLE_TODO":
      return {
        list: state.list.map((todo) =>
          todo.id === action.payload
            ? { ...todo, ischecked: !todo.ischecked }
            : todo
        ),
      };
    case "EDIT_TODO":
      return {
        list: state.list.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, name: action.payload.newName }
            : todo
        ),
      };

       
    default:
      return state;
  }
};

