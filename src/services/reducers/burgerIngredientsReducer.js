import {
  GET_INGREDIENTS,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
  SET_INGREDIENTS_TAB
} from '../actions/burgerIngredients';


const burgerIngredientsInitialState = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false,
  tabs: {}
};

export const burgerIngredientsReducer = (state = burgerIngredientsInitialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS: {
      return {
        ...state,
        ingredientsRequest: true,
        ingredientsFailed: false
      };
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        ingredientsRequest: false,
        ingredientsFailed: false,
        ingredients: action.ingredients
      };
    }
    case GET_INGREDIENTS_FAILED: {
      return {
        ...state,
        ingredientsRequest: false,
        ingredientsFailed: true
      };
    }
    case SET_INGREDIENTS_TAB: {
      console.log(action.tab, action.entry);
      //console.log(state)
      
      return {...state,
        tabs: {
          ...state.tabs, [action.tab]: action.entry
        }
      }
    }
    default: {
      return state;
    }
  }
};