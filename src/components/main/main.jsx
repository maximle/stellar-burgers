import React from 'react';
import styles from './main.module.css';
import BurgerIngridients from '../burger-ingridients/burger-ingridients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { sortArr } from '../../utils/utils';
import PropTypes from "prop-types";
import { ingredientPropType } from '../../utils/prop-types';

export default function Main({ data }) {
    console.log(data);
    const ingridients = sortArr(data);

  return (
    <main className={styles.main}>
      <BurgerIngridients ingridients={ingridients} />
      <BurgerConstructor ingridients={ingridients} />
    </main>
  )
}

Main.propTypes = PropTypes.arrayOf(ingredientPropType).isRequired;