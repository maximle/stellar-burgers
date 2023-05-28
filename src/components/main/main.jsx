import React from 'react';
import styles from './main.module.css';
import BurgerIngridients from '../burger-ingridients/burger-ingridients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { sortArr } from '../../utils/utils';
import PropTypes from "prop-types";
import { ingredientPropType } from '../../utils/prop-types';
import { BurgerConstructorContext } from '../../services/burgerConstructorContext';

const addToConstructor = (constructorIngridients, action) => {
  if (action.type === 'set') {
    // console.log(action.payload);
    // console.log(constructorIngridients);
    let constructorIngridientsClone = {...constructorIngridients};
    let cardClone = {...action.payload};
    let newIngridients = {...constructorIngridientsClone.ingridients};
      if (cardClone.type === 'bun') {
        console.log('+++++', constructorIngridientsClone.ingridients.buns.length);
        if (constructorIngridientsClone.ingridients.buns.length === 0) {
          console.log('===========', constructorIngridientsClone.ingridients);
          cardClone.name += ' (низ)';
          cardClone.type = 'bottom';
          console.log(action.payload);
        } else if (constructorIngridientsClone.ingridients.buns.length === 1) {
          cardClone.name += ' (верх)';
          cardClone.type = 'top';
        } else if (constructorIngridientsClone.ingridients.buns.length >= 2) {
          return (constructorIngridientsClone);
        }
        
        newIngridients.buns.push(cardClone);
        console.log('===========', newIngridients);
        
        } else {
        newIngridients.stuffings.push(cardClone);
      }
    
      constructorIngridientsClone = {
        ...constructorIngridientsClone,
        ingridients: newIngridients,
        total: constructorIngridientsClone.total + cardClone.price
      }
    
    console.log(constructorIngridientsClone);
    
    return (constructorIngridientsClone);
    }
}

export default function Main({ data }) {
    console.log(data);
    const ingridients = sortArr(data);
  console.log(ingridients);
  // const constructorIngridients = React.useState({
  //   ingridients: {buns: [], stuffings: []},
  //   total: 0
  // });

  const [constructorIngridients, constructorIngridientsDispatcher] = React.useReducer(addToConstructor, {
    ingridients: {buns: [], stuffings: []},
    total: 0
  });
  console.log(constructorIngridients);
  return (
    <main className={styles.main}>
      <BurgerConstructorContext.Provider value={{constructorIngridients, constructorIngridientsDispatcher}}>
        <BurgerIngridients ingridients={ingridients} />
      
        <BurgerConstructor />
      </BurgerConstructorContext.Provider>
      
    </main>
  )
}

Main.propTypes = PropTypes.arrayOf(ingredientPropType).isRequired;