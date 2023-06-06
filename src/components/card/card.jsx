import React from 'react';
import styles from './card.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modal/modal';
import IngridientDetails from '../ingredient-details/ingredient-details';
import { ingredientPropType } from '../../utils/prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_INGREDIENT } from '../../services/actions/burgerConstructor';
import { useDrag } from 'react-dnd';
import { OPEN_POPUP, CLOSE_POPUP } from '../../services/actions/ingredientDetails';

export default function Card({ card }) {
  const ingredientDetails = useSelector(state => state.ingredientDetails.ingredientDetails);
  
  const openPopup = () => {
    console.log(card);
    dispatch({
      type: OPEN_POPUP,
      payload: card
    })
  }
  const closePopup = (e) => {
    dispatch({
      type: CLOSE_POPUP,
      payload: null
    })
  }
  
  const dispatch = useDispatch();
  const constructorIngredients = useSelector(state => state.burgerConstructor);

  const [{ opacity }, dragRef] = useDrag({
    type: 'ingredient',
    item: card,
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.5 : 1
    })
  });

  return (
    <>
      <div className={`${styles.card}`} onClick={openPopup} ref={dragRef} style={{opacity}}>
        <img src={card.image} alt={card.name} className={`${styles.image} ml-4 mr-4 mb-1`} />
        <div className={`${styles.price} mb-1`}>
          <span className={`${styles.priceNum} text text_type_digits-default mr-2`}>
            {card.price}
          </span>
          <CurrencyIcon type="primary" />
        </div>
        <p className={`${styles.description} text text_type_main-small`}>
          {card.name}
        </p>
      </div>
      {ingredientDetails && 
        <Modal closePopup={closePopup}>
          <IngridientDetails />
        </Modal>
      }
      
    </>
  );
}

Card.propTypes = ingredientPropType.isRequired;
