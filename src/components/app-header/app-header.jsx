import React from 'react';
import styles from './app-header.module.css';
import {
  ListIcon,
  BurgerIcon,
  Logo,
  ProfileIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
import NavItem from '../nav-item/nav-item'


export default function AppHeader() {
  return (
    <header className={`${styles.header}`}>
      <nav className={`${styles.nav}`}>
        <ul className={`${styles.navItems}`}>
          <li className={`${styles.navItem} mr-2`}>
            <NavItem icon={<BurgerIcon type="primary" />} text='Конструктор' active={true}/>
          </li>
          <li className={`${styles.navItem}`}>
            <NavItem icon={<ListIcon type="secondary" />} text='Лента заказов'/>
          </li>
        </ul>
      </nav>
      <div className={`${styles.logo}`}>
        <Logo />
      </div>
      <div className={`${styles.navItem}`}>
        <NavItem icon={<ProfileIcon type="secondary" />} text='Личный кабинет'/>
      </div>
    </header>
  )
}
