import React from 'react';
import styles from './burger-ingridients.module.css';
import Tabs from '../tabs/tabs'
import IngridientsTab from '../ingridients-tab/ingridients-tab'
import tabsObj from '../../utils/constants';
import { sortArr } from '../../utils/utils';
import { BurgerConstructorContext } from '../../services/burgerConstructorContext';
import { useDispatch, useSelector } from 'react-redux';
import { getIngredients } from '../../services/actions/burgerIngredients';

import { useInView } from 'react-intersection-observer';

export default function BurgerIngridients() {
  const [tabs, setTabs] = React.useState(tabsObj);
  const [currentTab, setCurrentTab] = React.useState(
    Object.keys(tabsObj)[0]
  );

  // const [section1Ref, section1InView, entry1] = useInView({ threshold: 0.5 });
  // const [section2Ref, section2InView, entry2] = useInView({ threshold: 0.5 });
  // const [section3Ref, section3InView, entry3] = useInView({ threshold: 0.5 });
  // console.log(section1InView, section2InView, section3InView);
  // const tabRefs = {
  //   0: section1Ref,
  //   1: section2Ref,
  //   2: section3Ref
  // }
  
  const rawIngredients = useSelector(state => state.burgerIngredients);
  const ingredients = sortArr(rawIngredients.ingredients);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getIngredients());
    console.log(rawIngredients.tabs);

  }, []);
  // console.log(rawIngredients);
  // console.log(ingredients);
  const updateCurrentTab = () => {
    console.log(Object.keys(rawIngredients.tabs));
    const sortedTabs = null;
    const rrr = rawIngredients.tabs['Булки'].getBoundingClientRect();
    console.log(rrr);
  }

  return (
    <section className={`${styles.section} pt-10`}>
      <h1 className={`${styles.title} text text_type_main-medium mb-5`}>Соберите бургер</h1>
      <Tabs current={currentTab} setCurrentTab={setCurrentTab}  />
      <div className={`${styles.ingredients} custom-scroll`} onScroll={updateCurrentTab}>
        {Object.keys(tabsObj).map((key, i) => {
            return (
              //<div key={i} ref={tabRefs[i]}>
                <IngridientsTab
                  key={i}
                  tab={tabsObj[key]}
                  ingridients={ingredients[key]}
                />
              //</div>
              
            );
        })}
      </div>
      </section>
  )
}

