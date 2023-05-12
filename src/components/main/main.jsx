import React from 'react';
import styles from './main.module.css';
import BurgerIngridients from '../burger-ingridients/burger-ingridients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { sortArr } from '../../utils/utils';

export default function Main({ data }) {
    const ingridients = sortArr(data);

  return (
    <main className={styles.main}>
      <BurgerIngridients ingridients={ingridients} />
      <BurgerConstructor ingridients={ingridients} />
    </main>
  )
}