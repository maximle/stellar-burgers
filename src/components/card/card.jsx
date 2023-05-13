import React from 'react';
import styles from './card.module.css';
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modal/modal';
import IngridientDetails from '../ingridient-details/ingridient-details';
import { ingredientPropType } from '../../utils/prop-types';

export default function Card({ card }) {
  const [popupOpened, setPopupOpened] = React.useState(false);
  const openPopup = () => {
    setPopupOpened(true)
  }
  const closePopup = (e) => {
    setPopupOpened(false)
    console.log(e.target, e.target.parentNode, e.currentTarget);
  }
  return (
    <>
      <div className={`${styles.card}`} onClick={openPopup}>
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

Card.propTypes = ingredientPropType;
