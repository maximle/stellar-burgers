import React from 'react';
import styles from './ingridients-tab.module.css';
import { sortArr } from '../../utils/utils';
import Card from '../card/card'
import {Counter} from '@ya.praktikum/react-developer-burger-ui-components';
import { ingredientPropType, tabObjPropType } from '../../utils/prop-types';
import { useInView } from 'react-intersection-observer';
import { SET_INGREDIENTS_TAB } from '../../services/actions/burgerIngredients';
import { useDispatch, useSelector } from 'react-redux';

export default function IngridientsTab({tab, ingridients}) {
  // const [section1Ref, section1InView, entry1] = useInView({ threshold: 0.5 });
  // console.log(section1InView, tab, entry1);
  const dispatch = useDispatch();
  const state = useSelector(state => state.burgerIngredients.tabs)
  console.log(tab);
  const ref = React.useRef();
  
  React.useEffect(() => {    
    const tabPos = ref.current.getBoundingClientRect();
    console.log(tabPos.y);
    
    dispatch({
      type: SET_INGREDIENTS_TAB,
      entry: tabPos.y,
      tab: tab
    });
    
  }, []);
  return (
    <>
      <h2 className={`${styles.subtitle} text text_type_main-medium`} ref={ref}>{tab}</h2>
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
