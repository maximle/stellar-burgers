import { ADD_INGREDIENT, MOVE_INGREDIENT, DELETE_INGREDIENT } from '../actions/burgerConstructor';


const burgerConstructorInitialState = {
  ingredients: {buns: [], stuffings: []},
  totalPrice: 0,
  orderList: []
}

export const burgerConstructorReducer = (state = burgerConstructorInitialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT: {
      if (action.payload.type === 'bun') {
        return {
          ...state,
          ingredients: {
            ...state.ingredients,
            buns: [...state.ingredients.buns, action.payload]
          }
        }
      } else {
        return {
          ...state,
          ingredients: {
            ...state.ingredients,
            stuffings: [...state.ingredients.stuffings, action.payload]
          }
        }
      }
    }
    default: {
      return state;
    }
  }
}