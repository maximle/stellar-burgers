import React from 'react';
import styles from './card.module.css';
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modal/modal';
import IngridientDetails from '../ingridient-details/ingridient-details';
import { ingredientPropType } from '../../utils/prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_INGREDIENT } from '../../services/actions/burgerConstructor';
import { useDrag } from 'react-dnd';

export default function Card({ card }) {
  const [popupOpened, setPopupOpened] = React.useState(false);
  const openPopup = () => {
    setPopupOpened(true)
  }
  const closePopup = (e) => {
    setPopupOpened(false)
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
  const dispatch = useDispatch();
  const constructorIngredients = useSelector(state => state.burgerConstructor);

  const addToConstructor = () => {
    dispatch({
      type: ADD_INGREDIENT,
      payload: card
    })
  }

  const [, dragRef] = useDrag({
    type: 'ingredient',
    item: card
  });

  return (
    <>
      <div className={`${styles.card}`} onClick={addToConstructor} ref={dragRef} >
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
