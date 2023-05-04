import React from 'react';
import styles from './app-header.module.css';
import {Logo} from '@ya.praktikum/react-developer-burger-ui-components';
import NavItem from '../nav-item/nav-item'


class AppHeader extends React.Component {
  render() {
    return (
      <header className={`${styles.header}`}>
        <nav className={`${styles.nav}`}>
          <ul className={`${styles.navItems}`}>
            <li className={`${styles.navItem}`}>
              <NavItem />
            </li>
            <li className={`${styles.navItem}`}>

            </li>
          </ul>
        </nav>

        <div className={`${styles.logo}`}>
          <Logo />
        </div>
        
      </header>
    )
  }
}

export default AppHeader;