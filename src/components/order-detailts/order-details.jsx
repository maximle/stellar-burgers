import React from 'react';
import styles from './order-details.module.css';

export default function OrderDetails({}) {
  return (
    <div className={`${styles['order-details']} mt-30 mr-25 mb-30 ml-25`}>
      <h3 className={`${styles.title} text text_type_digits-large mb-8`}>034536</h3>
      <p className="text text_type_main-medium mb-15">Идентификатор заказа</p>
      <div className={`${styles.img} mb-15`}></div>
      <p className="text text_type_main-default mb-2">Ваш заказ начали готовить</p>
      <p className="text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</p>
    </div>
  )
}