import React from 'react';
import styles from './burger-constructor.module.css';
import { Button, DragIcon,ConstructorElement , CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modal/modal';
import OrderDetails from '../order-detailts/order-details';
import PropTypes from 'prop-types';
import { ingredientPropType } from '../../utils/prop-types'
import { BurgerConstructorContext } from '../../services/burgerConstructorContext';


export default function BurgerConstructor() {
  console.log(BurgerConstructorContext);
  const ingridients = React.useContext(BurgerConstructorContext).constructorIngridients.ingridients;
  // const stuffing =  ingridients.main.concat(ingridients.sauce);
  // const bun = ingridients.bun;
  console.log(ingridients);
  const totalPrice = React.useContext(BurgerConstructorContext).constructorIngridients.total;
  const [popupOpened, setPopupOpened] = React.useState(false);
  // const [totalPrice, totalPriceDispatcher] = React.useReducer(totalPriceReducer, 0);
  const openPopup = () => {
    setPopupOpened(true)
  }
  const closePopup = () => {
    setPopupOpened(false)
  }

  // useEffect(() => {
  //   const ingridientsList = document.querySelector('.ingridients-list');
  // }, []);

  return (
    <section className={`${styles.section}  pt-25`}>
      <ul className={`pl-8 ${styles['ingridients-list']} `}>
            {ingridients.buns.length === 2 && (   
                  <li key={ingridients.buns[1]['_id']} className={`${styles['ingridients-item']}`}>
                    <span className={`${styles['drag-icon']}`}>
                      <DragIcon type="primary" />
                    </span>
                    
                    <ConstructorElement text={ingridients.buns[1].name} price={ingridients.buns[1].price} thumbnail={ingridients.buns[1].image} isLocked={true} type={ingridients.buns[1].type}/>
                  </li>
                  
              )
            }
            <ul className={`${styles['ingridients-list']} ${styles.stuffing} custom-scroll`}>
            {ingridients.stuffings.map((item) => {
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
          {ingridients.buns.length >= 1 && (   
                  <li key={ingridients.buns[0]['_id']} className={`${styles['ingridients-item']}`}>
                    <span className={`${styles['drag-icon']}`}>
                      <DragIcon type="primary" />
                    </span>
                    
                    <ConstructorElement text={ingridients.buns[0].name} price={ingridients.buns[0].price} thumbnail={ingridients.buns[0].image} isLocked={true} type={ingridients.buns[0].type}/>
                  </li>
              )
          }
        
      </ul>
      <div className={`${styles.price} mt-10 pr-4`}>
          <span className={`${styles.price}`}>
            {totalPrice}
            <span className={`${styles.priceIcon} ml-2`}>
              <CurrencyIcon type='primary' />
            </span>
          </span>
          <div className="ml-10" >
            <Button type="primary" size="large" htmlType="button" onClick={openPopup}>Оформить заказ</Button>
          </div>
          {popupOpened && 
            <Modal closePopup={closePopup}>
              <OrderDetails />
            </Modal>
          }
      </div>

    </section>
  )
}


BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropType).isRequired
};
