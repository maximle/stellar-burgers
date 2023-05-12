import React from 'react';
import styles from './burger-constructor.module.css';
import { Button, DragIcon,ConstructorElement , CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

export default function BurgerConstructor({ ingridients }) {
  const stuffing =  ingridients.main.concat(ingridients.sauce);
  const bun = ingridients.bun;
  console.log(stuffing);
  return (
    <section className={`${styles.section}  pt-25`}>
      <ul className={`pl-8 ${styles['ingridients-list']} `}>
      <li className={`${styles['ingridients-item']}`}>
          <ConstructorElement
            type='top'
            isLocked={true}
            text={bun[0].name}
            price={bun[0].price}
            thumbnail={bun[0].image}
          />
        </li>
        <ul className={`${styles['ingridients-list']} ${styles.stuffing} custom-scroll`}>
          {stuffing.map((item) => {
            return (   
                <li key={item['_id']} className={`${styles['ingridients-item']}`}>
                  <span className={`${styles['drag-icon']}`}>
                    <DragIcon type="primary" />
                  </span>
                  
                  <ConstructorElement text={item.name} price={item.price} thumbnail={item.image} />
                </li>
            )
          })}
        </ul>
        <li className={`${styles.ingridientsList} pr-4 pl-8`}>
          <ConstructorElement
            type='bottom'
            isLocked={true}
            text={bun[1].name}
            price={bun[1].price}
            thumbnail={bun[1].image}
          />
        </li>
      </ul>
      <div className={`${styles.price} mt-10`}>
          <span className={`${styles.price}`}>
            610
            <span className={`${styles.priceIcon} ml-2`}>
              <CurrencyIcon type='primary' />
            </span>
          </span>
          <div className="mr-4 ml-10">
            <Button type="primary" size="large" htmlType="button">Оформить заказ</Button>
          </div>
      </div>
    </section>
  )
}