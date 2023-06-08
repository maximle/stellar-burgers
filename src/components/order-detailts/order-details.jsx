import React from 'react';
import styles from './order-details.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { order } from '../../services/actions/orderDetails';
export default function OrderDetails() {

  React.useEffect(() => {
    dispatch(order()); 
  }, []);

  const {orderData, orderRequest, orderFailed } = useSelector(state => state.orderDetails);
  
  
  const dispatch = useDispatch();
  
  React.useEffect(() => {
    dispatch(order());
  }, []);
  console.log(orderData);
  return (
    <div className={`${styles['order-details']} mt-30 mr-25 mb-30 ml-25`}>
      <h3 className={`${styles.title} text text_type_digits-large mb-8`}>
        {orderRequest && <p className="text text_type_main-large mb-2">загрузка...</p>}
        {orderData.number}
      </h3>
      <p className="text text_type_main-medium mb-15">Идентификатор заказа</p>
      <div className={`${styles.img} mb-15`}></div>
      <p className="text text_type_main-default mb-2">Ваш заказ начали готовить</p>
      <p className="text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</p>
    </div>
  )
}