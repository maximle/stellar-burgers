import { combineReducers } from 'redux';
import { burgerIngredientsReducer } from './burgerIngredientsReducer';
import { burgerConstructorReducer } from './burgerContructorReducer';
import { ingredientDetailsReducer } from './ingredientDetailsReducer';


export const rootReducer = combineReducers({
  burgerIngredients: burgerIngredientsReducer,
  burgerConstructor: burgerConstructorReducer,
  ingredientDetails: ingredientDetailsReducer
});