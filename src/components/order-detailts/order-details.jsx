import React from 'react';
import styles from './order-details.module.css';
import { order } from '../../utils/burger-api';
import { BurgerConstructorContext } from '../../services/burgerConstructorContext';

export default function OrderDetails({}) {
  const { constructorIngridients } = React.useContext(BurgerConstructorContext);
  
  const [state, setState] = React.useState({
    data: null,
    isLoading: false,
    hasError: false
  });

  

  React.useEffect(() => {
    const getData = () => {
      setState({...state, isLoading: true});
      order(constructorIngridients.orderList)
        .then((res) => {
          setState((prevState) => ({ ...prevState, data: res }));
        })
        .catch((err) => {
          console.log(err);
          setState((prevState) => ({ ...prevState, hasError: true }));
        })
        .finally(() => {
          setState((prevState) => ({ ...prevState, isLoading: false }));
        })
    }

    getData();    
  }, []);

  return (
    <div className={`${styles['order-details']} mt-30 mr-25 mb-30 ml-25`}>
      <h3 className={`${styles.title} text text_type_digits-large mb-8`}>
        {state.data && state.data.order.number}
      </h3>
      <p className="text text_type_main-medium mb-15">Идентификатор заказа</p>
      <div className={`${styles.img} mb-15`}></div>
      <p className="text text_type_main-default mb-2">Ваш заказ начали готовить</p>
      <p className="text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</p>
    </div>
  )
}