import React from 'react';
import styles from './card.module.css';
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';

export default function Card({ card, onClick }) {
  return (
    <>
      <div className={`${styles.card}`} onClick={onClick}>
        <img src={card.image} alt={card.name} className={`${styles.image} ml-4 mr-4 mb-1`} />
        <div className={`${styles.cost} mb-1`}>
          <span className={`${styles.priceNumber} text text_type_digits-default`}>
            {card.price}
          </span>
          <CurrencyIcon type="primary" />
        </div>
        <p className={`${styles.description} text text_type_main-small`}>
          {card.name}
        </p>
      </div>
    </>
  );
}