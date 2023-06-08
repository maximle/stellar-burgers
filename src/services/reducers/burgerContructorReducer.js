import { ADD_INGREDIENT, SORT_INGREDIENT, DELETE_INGREDIENT, RESET_CONSTRUCTOR } from '../actions/burgerConstructor';


const burgerConstructorInitialState = {
  ingredients: {buns: [], stuffings: []},
  totalPrice: {buns: 0, stuffings: 0},
  orderList: {buns: [], stuffings: []}
}

export const burgerConstructorReducer = (state = burgerConstructorInitialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT: {
      if (action.payload.type === 'bun') {
        return {
          ...state,
          ingredients: {
            ...state.ingredients,
            buns: [action.payload, action.payload]
          },
          totalPrice: {...state.totalPrice,
            buns: (action.payload.price * 2)
          },
          orderList: {
            ...state.orderList,
            buns: [action.payload._id, action.payload._id]
          }
        }
      } else {
        return {
          ...state,
          ingredients: {
            ...state.ingredients,
            stuffings: [...state.ingredients.stuffings, action.payload]
          },
          totalPrice: {...state.totalPrice,
            stuffings: state.totalPrice.stuffings + action.payload.price
          },
          orderList: {...state.orderList,
            stuffings: [...state.orderList.stuffings, action.payload._id]
          }
        
        }
      }
    }
    case DELETE_INGREDIENT: {
      console.log(state.orderList);
      let newStuffings = state.ingredients.stuffings;
      console.log(action.index);
      newStuffings.splice(action.index, 1);
      let newOrderList = state.orderList.stuffings;
      newOrderList.splice(newOrderList.findIndex(el => el === action.payload._id), 1);
      console.log(state.orderList, newOrderList, '====');
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          stuffings: newStuffings
        },
        totalPrice: {...state.totalPrice,
          stuffings: (state.totalPrice.stuffings - action.payload.price)
        },
        orderList: {...state.orderList,
          stuffings: newOrderList
        }
      }
    }
    case SORT_INGREDIENT:{
      console.log('=========');
      let stuffings = [...state.ingredients.stuffings];
      stuffings.splice(action.dragIndex, 1);
      stuffings.splice(action.hoverIndex, 0, action.element);
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          stuffings: stuffings
        }
      }
    }
    case RESET_CONSTRUCTOR: {
      return burgerConstructorInitialState
    }
    default: {
      return state;
    }
  }
}