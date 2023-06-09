import React from 'react';
import styles from './app.module.css';
import AppHeader from '../app-header/app-header';
import Main from '../main/main';
import { getIngredients } from '../../utils/burger-api';



export default function App() {
  return (
    <div className={styles.app}>
      <AppHeader />
      <Main />
    </div>
  );
}

