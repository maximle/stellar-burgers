import React from 'react';
// import { useContext } from 'react';

import styles from './card.module.css';
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modal/modal';
import IngridientDetails from '../ingridient-details/ingridient-details';
import { ingredientPropType } from '../../utils/prop-types';
import { ingridientsList } from '../burger-constructor/burger-constructor'
import { BurgerConstructorContext } from '../../services/burgerConstructorContext';


export default function Card({ card }) {
  const [popupOpened, setPopupOpened] = React.useState(false);
  const [constructorIngridients, setConstructorIngridients] = React.useContext(BurgerConstructorContext);
  const openPopup = () => {
    setPopupOpened(true)
  }
  const closePopup = (e) => {
    setPopupOpened(false)
    console.log(e.target, e.target.parentNode, e.currentTarget);
  }

  const addToContructor = () => {
    console.log(card);
    console.log(constructorIngridients);
    setConstructorIngridients([...constructorIngridients, card]);
  }

  return (
    <>
      <div className={`${styles.card}`} onClick={addToContructor}>
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
      {popupOpened && 
        <Modal closePopup={closePopup}>
          <IngridientDetails ingridient={card} />
        </Modal>
      }
      
    </>
  );
}

Card.propTypes = ingredientPropType.isRequired;
