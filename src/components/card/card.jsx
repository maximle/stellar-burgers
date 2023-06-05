import React from 'react';
import styles from './card.module.css';
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modal/modal';
import IngridientDetails from '../ingridient-details/ingridient-details';
import { ingredientPropType } from '../../utils/prop-types';
import { ingridientsList } from '../burger-constructor/burger-constructor'
import { BurgerConstructorContext } from '../../services/burgerConstructorContext';


export default function Card({ card }) {
  const [popupOpened, setPopupOpened] = React.useState(false);
  const { constructorIngridients } = React.useContext(BurgerConstructorContext);
  const { constructorIngridientsDispatcher } = React.useContext(BurgerConstructorContext);
  const openPopup = () => {
    setPopupOpened(true)
  }
  const closePopup = (e) => {
    setPopupOpened(false)
    console.log(e.target, e.target.parentNode, e.currentTarget);
  }

  // const addToConstructor = () => {
  //   console.log(card);
  //   console.log(constructorIngridients);
  //   let constructorIngridientsClone = {...constructorIngridients};
  //   let cardClone = {...card};
  //   let newIngridients = constructorIngridientsClone.ingridients;
  //     if (card.type === 'bun') {
  //       if (constructorIngridientsClone.ingridients.buns.length === 0) {
  //         console.log('===========', constructorIngridientsClone.ingridients);
  //         cardClone.name += ' (низ)';
  //         cardClone.type = 'bottom';
  //         console.log(card);
  //       } else if (constructorIngridientsClone.ingridients.buns.length === 1) {
  //         cardClone.name += ' (верх)';
  //         cardClone.type = 'top';
  //       } else {
  //         return
  //       }
        
  //       newIngridients.buns.push(cardClone);
  //       console.log('===========', newIngridients);
        
  //       } else {
  //       newIngridients.stuffings.push(cardClone);
  //     }
    
  //     constructorIngridientsClone = {
  //       ...constructorIngridientsClone,
  //       ingridients: newIngridients,
  //       total: constructorIngridientsClone.total + cardClone.price
  //     }
    
  //   // constructorIngridientsClone = {
  //   //   ...constructorIngridientsClone,
  //   //   ingridients: [...constructorIngridientsClone.ingridients, card],
  //   //   total: constructorIngridientsClone.total + card.price
  //   // }
  //   console.log(constructorIngridientsClone);
  //   // setConstructorIngridients({
  //   //   ...constructorIngridients,
  //   //   ingridients: [...constructorIngridients.ingridients, card],
  //   //   total: constructorIngridients.total + card.price
  //   // });
  //   setConstructorIngridients(constructorIngridientsClone);
  // }

  return (
    <>
      <div className={`${styles.card}`} onClick={() => {constructorIngridientsDispatcher({type: 'set', payload: card})}}>
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
