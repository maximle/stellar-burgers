import React from 'react';
import styles from './nav-item.module.css';
import PropTypes from "prop-types";


export default function NavItem(props) {
    return(
      <a href="#" className={`
      ${styles.link} 
      ${props.active ? styles.link_active : ''} 
      text 
      text_type_main-default
      pl-5 pr-5 pt-4 pb-4
      `}>
        <div className={`${styles.icon} mr-2`}>
          {props.icon}
        </div>
        <p className={`
        ${styles.text} 
        text 
        text_type_main-default
        `}>
          {props.text}
        </p>
      </a>
    )
}

NavItem.propTypes = {
  icon: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired
};