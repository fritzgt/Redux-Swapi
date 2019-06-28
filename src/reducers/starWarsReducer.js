import { FETCHING, SUCCESS, FAILURE } from "../actions";
const initialState = {
  // Array characters, Boolean fetching, null error.
  characters: [],
  error: "",
  fetching: false
};
export const charsReducer = (state = initialState, action) => {
  // console.log("Reducer:", action);
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING:
      return {
        ...state,
        characters: [],
        error: "",
        fetching: true
      };
    case SUCCESS:
      console.log("Array from Reducer", action.payload);
      return {
        ...state,
        error: "",
        fetching: false,
        characters: action.payload
      };
    case FAILURE:
      return {
        ...state,
        characters: [],
        fetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};
