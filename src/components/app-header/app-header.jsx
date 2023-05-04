import React from 'react';
import styles from './app-header.module.css';
import {Logo} from '@ya.praktikum/react-developer-burger-ui-components';

class AppHeader extends React.Component {
  render() {
    return (
      <header className={`${styles.header}`}>
        <p>test</p>  
        <Logo />
      </header>
    )
  }
}

export default AppHeader;