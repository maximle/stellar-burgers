import React from 'react';
import styles from './burger-ingridients.module.css';
import Tabs from '../tabs/tabs'
import IngridientsTab from '../ingridients-tab/ingridients-tab'
import tabsObj from '../../utils/constants';
import { sortArr } from '../../utils/utils';
import { BurgerConstructorContext } from '../../services/burgerConstructorContext';
import { useDispatch, useSelector } from 'react-redux';
import { getIngredients } from '../../services/actions/burgerIngredients';

export default function BurgerIngridients() {
  const [tabs, setTabs] = React.useState(tabsObj);
  const [currentTab, setCurrentTab] = React.useState(
    Object.keys(tabsObj)[0]
  );
  const rawIngredients = useSelector(state => state.burgerIngredients);
  const ingredients = sortArr(rawIngredients.ingredients);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getIngredients());
  }, []);
  console.log(rawIngredients);
  console.log(ingredients);
  
  return (
    <section className={`${styles.section} pt-10`}>
      <h1 className={`${styles.title} text text_type_main-medium mb-5`}>Соберите бургер</h1>
      <Tabs current={currentTab} setCurrentTab={setCurrentTab}  />
      <div className={`${styles.ingredients} custom-scroll`}>
        {Object.keys(tabsObj).map((key, i) => {
            return (
              <IngridientsTab
                key={i}
                tab={tabsObj[key]}
                ingridients={ingredients[key]}
              />
            );
        })}
      </div>
      </section>
  )
}

