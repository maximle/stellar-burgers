import { combineReducers } from 'redux';
import { burgerIngredientsReducer } from './burgerIngredientsReducer';
import { burgerConstructorReducer } from './burgerContructorReducer';



export const rootReducer = combineReducers({
  burgerIngredients: burgerIngredientsReducer,
  burgerConstructor: burgerConstructorReducer
});