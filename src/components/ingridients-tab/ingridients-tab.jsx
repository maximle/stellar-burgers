import React from 'react';
import styles from './ingridients-tab.module.css';
import Card from '../card/card';
import {Counter} from '@ya.praktikum/react-developer-burger-ui-components';
import { ingredientPropType, tabObjPropType } from '../../utils/prop-types';
import { useInView } from 'react-intersection-observer';
import { SET_INGREDIENTS_TAB } from '../../services/actions/burgerIngredients';
import { useDispatch, useSelector } from 'react-redux';
import tabsObj from '../../utils/constants';

export default function IngridientsTab({tab, ingridients}) {
  const dispatch = useDispatch();
  const state = useSelector(state => state.burgerIngredients.tabs)
  const [section1Ref, section1InView, entry1] = useInView({ threshold: 0 });
  
  React.useEffect(() => {
    dispatch({
      type: SET_INGREDIENTS_TAB,
      tab: tab,
      entry: entry1,
      isInView: section1InView
    });
  }, [entry1]);
  return (
    <>
      <h2 className={`${styles.subtitle} text text_type_main-medium`} ref={section1Ref}>{tabsObj[tab]}</h2>
      <ul className={`${styles.cards} pt-6 pl-4 pb-10`}>
        {ingridients && ingridients.map((card, i) => {
          return (
            <li className={styles.card} key={card["_id"]}>
              <Card card={card} />
            </li>
          )
        })}
      </ul>
    </>
  )
}

IngridientsTab.propTypes = {tabObjPropType, ingredientPropType}.isRequired;
