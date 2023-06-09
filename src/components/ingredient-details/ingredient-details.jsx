import React from 'react';
import styles from './ingredient-details.module.css';
import { useSelector } from 'react-redux';

export default function IngridientDetails() {
  const ingredient = useSelector(state => state.ingredientDetails.ingredientDetails);
  return (
    <div className={`${styles['ingredient-details']} mt-10 mr-10 mb-15 ml-10`}>
      <h3 className={`${styles.title} text text_type_main-large`}>Детали ингриидиента</h3>
      <img src={ingredient.image_large} alt={ingredient.name} className={`${styles.img} text text_type_main-large`}/>
      <h4 className='text text_type_main-medium mb-8'>{ingredient.name}</h4>
      <ul className={`${styles.macronutrients}`}>
        <li className={`${styles.macro}`}>
          <p className='text text_type_main-default text_color_inactive'>Калории, ккал</p>
          <p className='text text_type_digits-default text_color_inactive'>{ingredient.calories}</p>
        </li>
        <li className={`${styles.macro}`}>
          <p className='text text_type_main-default text_color_inactive'>Белки, г</p>
          <p className='text text_type_digits-default text_color_inactive'>{ingredient.proteins}</p>
        </li>
        <li className={`${styles.macro}`}>
          <p className='text text_type_main-default text_color_inactive'>Жиры, г</p>
          <p className='text text_type_digits-default text_color_inactive'>{ingredient.fat}</p>
        </li>
        <li className={`${styles.macro}`}>
          <p className='text text_type_main-default text_color_inactive'>Углеводы, г</p>
          <p className='text text_type_digits-default text_color_inactive'>{ingredient.carbohydrates}</p>
        </li>
      </ul>
    </div>
  )
}
