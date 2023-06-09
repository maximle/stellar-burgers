import { v4 as uuidv4 } from 'uuid'; 

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const SORT_INGREDIENT = 'SORT_INGREDIENT';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';
export const RESET_CONSTRUCTOR = 'RESET_CONSTRUCTOR';



export const addIngredient = (item) => {
  return {
      type: ADD_INGREDIENT,
      payload: {
          ...item, // используем `spread`, чтобы поменять ссылку на объект. Таким образом `redux` обновит его в хранилище
         uniqueId: uuidv4()  // и добавляем в объект новое поле, которое потом будет использовано в `key`
      }
  }
}

export const deleteIngredient = (item, index) => {
  return {
      type: DELETE_INGREDIENT,
      payload: item,
      index: index      
  }
}

