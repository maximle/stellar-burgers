import React from 'react';
import styles from './burger-ingridients.module.css';
import Tabs from '../tabs/tabs'
import IngridientsTab from '../ingridients-tab/ingridients-tab'
import tabsObj from '../../utils/constants';
import PropTypes from 'prop-types';
import { ingredientPropType } from '../../utils/prop-types';
import { BurgerConstructorContext } from '../../services/burgerConstructorContext';


export default function BurgerIngridients({ingridients}) {
  const [tabs, setTabs] = React.useState(tabsObj);
  const [currentTab, setCurrentTab] = React.useState(
    Object.keys(tabsObj)[0]
  );
  
  const [constructorIngridients, setConstructorIngridients] = React.useContext(BurgerConstructorContext);

  console.log(ingridients, constructorIngridients);
  
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
                ingridients={ingridients[key]}
              />
            );
        })}
      </div>
      </section>
  )
}

BurgerIngridients.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropType).isRequired
};