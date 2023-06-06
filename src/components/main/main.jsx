import React from 'react';
import styles from './main.module.css';
import BurgerIngridients from '../burger-ingridients/burger-ingridients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { sortArr } from '../../utils/utils';
import PropTypes from "prop-types";
import { ingredientPropType } from '../../utils/prop-types';
import { BurgerConstructorContext } from '../../services/burgerConstructorContext';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';


const addToConstructor = (constructorIngridients, action) => {
  if (action.type === 'set') {
    let constructorIngridientsClone = {...constructorIngridients};
    let cardClone = {...action.payload};
    let newIngridients = {...constructorIngridientsClone.ingridients};
    let newOrderList = [...constructorIngridientsClone.orderList];
    let price = cardClone.price;
      if (cardClone.type === 'bun') {       
        if (constructorIngridientsClone.ingridients.buns.length >= 2) {
          return (constructorIngridientsClone);
        }
        newIngridients.buns.push(cardClone);
        newIngridients.buns.push(cardClone);
        price *= 2;
        } else {
        newIngridients.stuffings.push(cardClone);
      }
      newOrderList.push(cardClone['_id']);
      constructorIngridientsClone = {
        ...constructorIngridientsClone,
        ingridients: newIngridients,
        total: constructorIngridientsClone.total + price,
        orderList: newOrderList
      }
    
    console.log(constructorIngridientsClone);
    
    return (constructorIngridientsClone);
    } else if (action.type === 'reset') {
      let constructorIngridientsClone = {...constructorIngridients};
      return (constructorIngridientsClone = {
        ingridients: {buns: [], stuffings: []},
        total: 0,
        orderList: []
      });
    }
}

export default function Main() {
  // console.log(data);
  // const ingridients = sortArr(data);
  // console.log(ingridients);
  // const [constructorIngridients, constructorIngridientsDispatcher] = React.useReducer(addToConstructor, {
  //   ingridients: {buns: [], stuffings: []},
  //   total: 0,
  //   orderList: []
  // });
  // console.log(constructorIngridients);
  return (
    <main className={styles.main}>
      <DndProvider backend={HTML5Backend}>
        <BurgerIngridients />
        <BurgerConstructor />
      </DndProvider>
        
    </main>
  )
}

