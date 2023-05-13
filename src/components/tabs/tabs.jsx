import React from 'react';
import styles from './tabs.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from "prop-types";



export default function Tabs({current, setCurrentTab}) {
  return (
    <div className='mb-10' style={{ display: 'flex' }}>
      <Tab value="bun" active={current === 'bun'} onClick={setCurrentTab}>
        Булки
      </Tab>
      <Tab value="sauce" active={current === 'sauce'} onClick={setCurrentTab}>
        Соусы
      </Tab>
      <Tab value="main" active={current === 'main'} onClick={setCurrentTab}>
        Начинки
      </Tab>
    </div>
  )
}

Tabs.propTypes = {
  current: PropTypes.string,
  setCurrentTab: PropTypes.func
};