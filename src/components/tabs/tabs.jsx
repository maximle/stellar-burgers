import React from 'react';
import styles from './tabs.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from "prop-types";
import { useInView } from 'react-intersection-observer';


export default function Tabs({current, setCurrentTab}) {
  const [section1Ref, section1InView, entry1] = useInView({ threshold: 0.5 });
  const [section2Ref, section2InView, entry2] = useInView({ threshold: 0.5 });
  const [section3Ref, section3InView, entry3] = useInView({ threshold: 0.5 });
  
  React.useEffect(() => {
    console.log(entry1, entry2, entry3);
    console.log(section1InView);
    return (entry1)
  }, [entry1, entry2, entry3]);


  return (
    <div className={`${styles.container} mb-10`}>
      <Tab value="bun" active={current === 'bun'} onClick={setCurrentTab}>
        Булки
      </Tab>
      <Tab value="sauce" active={current === 'sauce'} onClick={setCurrentTab}>
        Соусы
      </Tab>
      <Tab value="main" active={current === 'main'} onClick={setCurrentTab}>
        Начинки
      </Tab>
      {/* <div ref={section1Ref}>
        <Tab value="bun" active={section1InView} onClick={setCurrentTab} >
          Булки
        </Tab>
      </div>
      <div ref={section2Ref}>
        <Tab value="sauce" active={section2InView} onClick={setCurrentTab}>
          Соусы
        </Tab>
      </div>
      <div ref={section3Ref}>
        <Tab value="main" active={section3InView} onClick={setCurrentTab}>
          Начинки
        </Tab>
      </div> */}
      
    </div>
  )
}

Tabs.propTypes = {
  current: PropTypes.string,
  setCurrentTab: PropTypes.func
};