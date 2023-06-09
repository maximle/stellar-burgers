import React from 'react';
import styles from './burger-ingridients.module.css';
import Tabs from '../tabs/tabs'
import IngridientsTab from '../ingridients-tab/ingridients-tab'
import tabsObj from '../../utils/constants';
import { sortArr } from '../../utils/utils';
import { useDispatch, useSelector } from 'react-redux';
import { getIngredients } from '../../services/actions/burgerIngredients';


export default function BurgerIngridients() {
  const [currentTab, setCurrentTab] = React.useState(
    Object.keys(tabsObj)[0]
  );
  const rawIngredients = useSelector(state => state.burgerIngredients);
  const ingredients = sortArr(rawIngredients.ingredients);
  const dispatch = useDispatch();
  
  React.useEffect(() => {
    dispatch(getIngredients());
    console.log(rawIngredients.tabs);

  }, []);

  const updateCurrentTab = () => {
    //console.log(rawIngredients.tabs);
    let arrToSort = [];
    let arrToSort2 = [];
    for (let key in rawIngredients.tabs) {
      arrToSort.push([key, rawIngredients.tabs[key].intersectionRect.y]);
    }
    arrToSort.map((item) => {
      if (item[1] > 0) {
        arrToSort2.push(item);
      }
    })
    arrToSort2.sort(function(a, b) {
       return a[1] - b[1];
    });
    if (arrToSort2.length > 0) {
      setCurrentTab(arrToSort2[0][0]);
    }
  }

  return (
    <section className={`${styles.section} pt-10`}>
      <h1 className={`${styles.title} text text_type_main-medium mb-5`}>Соберите бургер</h1>
      <Tabs current={currentTab} setCurrentTab={setCurrentTab}  />
      <div className={`${styles.ingredients} custom-scroll`} onScroll={updateCurrentTab}>
        {Object.keys(tabsObj).map((key, i) => {
            return (
              <IngridientsTab
                key={i}
                tab={key}
                ingridients={ingredients[key]}
              />
            );
        })}
      </div>
      </section>
  )
}

