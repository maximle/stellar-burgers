import React from 'react';
import styles from './burger-constructor.module.css';
import { Button, DragIcon,ConstructorElement , CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modal/modal';
import OrderDetails from '../order-detailts/order-details';
import { useSelector, useDispatch } from 'react-redux';
import { DELETE_INGREDIENT, ADD_INGREDIENT, addIngredient } from '../../services/actions/burgerConstructor';
import { useDrop } from 'react-dnd';
import ConstructorCard from '../constructor-card/constructor-card';
import { useModal } from '../hooks/useModal';
import { order } from '../../services/actions/orderDetails';

export default function BurgerConstructor() {
  const dispatch = useDispatch();
  const ingridients = useSelector(state => state.burgerConstructor.ingredients);
  // const stuffing =  ingridients.main.concat(ingridients.sauce);
  console.log(ingridients);
  const totalPrice = useSelector(state => (state.burgerConstructor.totalPrice.buns + state.burgerConstructor.totalPrice.stuffings));
  const orderList = useSelector(state => state.burgerConstructor.orderList);
  console.log(orderList);
  const { isModalOpen, openModal, closeModal } = useModal();
 

  const [{ isHover }, dropRef] = useDrop({
    accept: 'ingredient',
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
    drop(card) {
      console.log(card);
      dispatch(addIngredient(card));
    },
  });

  
  const border = isHover ? '1px solid lightgreen' : '1px solid transparent';
  return (
    <section className={`${styles.section}  pt-25`}>
      <ul className={`pl-8 ${styles['ingridients-list']} `}>
            {ingridients.buns.length === 2 && (   
                  <li key={ingridients.buns[1]['_id']} className={`${styles['ingridients-item']}`}>
                    <ConstructorElement text={`${ingridients.buns[0].name} (верх)`} price={ingridients.buns[1].price} thumbnail={ingridients.buns[1].image} isLocked={true} type={'top'}/>
                  </li>
                  
              )
            }
            <ul className={`${styles['ingridients-list']} ${styles.stuffing} custom-scroll`} ref={dropRef} style={{border}}>
            {ingridients.stuffings.map((item, i) => {
              return (
                  <ConstructorCard key={item.uniqueId} item={item} index={i} />
              )
            })}
          </ul>
          {ingridients.buns.length >= 1 && (   
                  <li key={ `${ingridients.buns[0]['_id']}_2`} className={`${styles['ingridients-item']}`}>
                    <ConstructorElement 
                    text={`${ingridients.buns[0].name} (низ)`} 
                    price={ingridients.buns[0].price} 
                    thumbnail={ingridients.buns[0].image} 
                    isLocked={true} type={'bottom'}
                    />
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
            <Button type="primary" size="large" htmlType="button" 
              onClick={() => {
                openModal(); 
                dispatch(order()); 
              }}
            >
              Оформить заказ
            </Button>
          </div>
          {isModalOpen && 
            <Modal closePopup={closeModal}>
              <OrderDetails />
            </Modal>
          }
      </div>

    </section>
  )
}
