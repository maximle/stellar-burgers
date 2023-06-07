import React from 'react';
import styles from './burger-constructor.module.css';
import { Button, DragIcon,ConstructorElement , CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modal/modal';
import OrderDetails from '../order-detailts/order-details';
import { useSelector, useDispatch } from 'react-redux';
import { DELETE_INGREDIENT, ADD_INGREDIENT } from '../../services/actions/burgerConstructor';
import { useDrop } from 'react-dnd';
import ConstructorCard from '../constructor-card/constructor-card';

export default function BurgerConstructor() {
  const dispatch = useDispatch();
  const ingridients = useSelector(state => state.burgerConstructor.ingredients);
  // const stuffing =  ingridients.main.concat(ingridients.sauce);
  console.log(ingridients);
  const totalPrice = useSelector(state => state.burgerConstructor.totalPrice);
  const [popupOpened, setPopupOpened] = React.useState(false);

  const openPopup = () => {
    if (ingridients.buns.length > 0 || ingridients.stuffings.length) {
      setPopupOpened(true)
    }
  }
  const closePopup = () => {
    setPopupOpened(false)
  }

  // const handleDeleteButton = (item, index) => {
  //   dispatch({
  //     type: DELETE_INGREDIENT,
  //     index: index,
  //     payload: item
  //   });
  // }

  const [{ isHover }, dropRef] = useDrop({
    accept: 'ingredient',
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
    drop(card) {
      console.log(card);
      dispatch({
        type: ADD_INGREDIENT,
        payload: card
      });
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
                  // <li key={item['_id']} className={`${styles['ingridients-item']}`}>
                  //   <span className={`${styles['drag-icon']}`}>
                  //     <DragIcon type="primary" />
                  //   </span>
                    
                  //   <ConstructorElement 
                  //   text={item.name} 
                  //   price={item.price} 
                  //   thumbnail={item.image}
                  //   handleClose={() => handleDeleteButton(item, i)}
                  //   />
                  // </li>
                  <ConstructorCard key={item['_id']} item={item} index={i} />
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


// BurgerConstructor.propTypes = {
//   ingredients: PropTypes.arrayOf(ingredientPropType).isRequired
// };
