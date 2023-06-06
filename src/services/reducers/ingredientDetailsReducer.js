import { OPEN_POPUP, CLOSE_POPUP } from '../actions/ingredientDetails';

const ingredientDetailsInitialState = {
  ingredientDetails: null
}

export const ingredientDetailsReducer = (state = ingredientDetailsInitialState, action) => {
  switch (action.type) {
    case OPEN_POPUP: {
      return {
        ...state,
        ingredientDetails: action.payload
      }
    }
    case CLOSE_POPUP: {
      return {
        ...state,
        ingredientDetails: null
      }
    }
    default: {
      return state;
    }
  }
};