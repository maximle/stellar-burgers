import React from 'react';
import styles from './ingridients-tab.module.css';
import { sortArr } from '../../utils/utils';
import Card from '../card/card'
import {Counter} from '@ya.praktikum/react-developer-burger-ui-components';


export default function IngridientsTab({tab, ingridients}) {
  
  
  console.log(ingridients);
  return (
    <>
      <h2 className={`${styles.subtitle} text text_type_main-medium`}>{tab}</h2>
      <ul className={`${styles.cards} pt-6 pl-4 pb-10`}>
        {ingridients && ingridients.map((card, i) => {
          // const counter = i === 0 ? (
          //   <div className={`${styles.counter}`}>
          //     <Counter count={1} size='default' />
          //   </div>
          // ) : ( '' )
          return (
            
            <li className={styles.card} key={card["_id"]}>
              <Card card={card} detailInfo={card} />
            </li>
          )
        })}
      </ul>
    </>
    

  )
}