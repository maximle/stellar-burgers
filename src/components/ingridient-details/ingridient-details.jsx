import React from 'react';
import styles from './ingridient-details.module.css';
import PropTypes from 'prop-types';
import { ingredientPropType } from '../../utils/prop-types';

export default function IngridientDetails({ingridient}) {
  console.log(ingridient);
  return (
    <div className={`${styles['ingridient-details']} mt-10 mr-10 mb-15 ml-10`}>
      <h3 className={`${styles.title} text text_type_main-large`}>Детали ингриидиента</h3>
      <img src={ingridient.image_large} alt={ingridient.name} className={`${styles.img} text text_type_main-large`}/>
      <h4 className='text text_type_main-medium mb-8'>{ingridient.name}</h4>
      <ul className={`${styles.macronutrients}`}>
        <li className={`${styles.macro}`}>
          <p className='text text_type_main-default text_color_inactive'>Калории, ккал</p>
          <p className='text text_type_digits-default text_color_inactive'>{ingridient.calories}</p>
        </li>
        <li className={`${styles.macro}`}>
          <p className='text text_type_main-default text_color_inactive'>Белки, г</p>
          <p className='text text_type_digits-default text_color_inactive'>{ingridient.proteins}</p>
        </li>
        <li className={`${styles.macro}`}>
          <p className='text text_type_main-default text_color_inactive'>Жиры, г</p>
          <p className='text text_type_digits-default text_color_inactive'>{ingridient.fat}</p>
        </li>
        <li className={`${styles.macro}`}>
          <p className='text text_type_main-default text_color_inactive'>Углеводы, г</p>
          <p className='text text_type_digits-default text_color_inactive'>{ingridient.carbohydrates}</p>
        </li>
      </ul>
    </div>
  )
}

IngridientDetails.propTypes = ingredientPropType.isRequired;