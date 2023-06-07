import { ADD_INGREDIENT, SORT_INGREDIENT, DELETE_INGREDIENT } from '../actions/burgerConstructor';


const burgerConstructorInitialState = {
  ingredients: {buns: [], stuffings: []},
  totalPrice: 0,
  orderList: []
}

export const burgerConstructorReducer = (state = burgerConstructorInitialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT: {
      if (action.payload.type === 'bun') {
        if (state.ingredients.buns.length < 2) {
          return {
            ...state,
            ingredients: {
              ...state.ingredients,
              buns: [...state.ingredients.buns, action.payload, action.payload]
            },
            totalPrice: (state.totalPrice + action.payload.price * 2),
            orderList: [...state.orderList, action.payload._id, action.payload._id]
          }
        } else {
          alert('Булки уже добавлены');
          return state;
        }
      } else {
        return {
          ...state,
          ingredients: {
            ...state.ingredients,
            stuffings: [...state.ingredients.stuffings, action.payload]
          },
          totalPrice: (state.totalPrice + action.payload.price),
          orderList: [...state.orderList, action.payload._id]
        
        }
      }
    }
    case DELETE_INGREDIENT: {
      let newStuffings = state.ingredients.stuffings;
      console.log(action.index);
      newStuffings.splice(action.index, 1);
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          stuffings: newStuffings
        },
        totalPrice: (state.totalPrice - action.payload.price)
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
    default: {
      return state;
    }
  }
}