import React from 'react';
import styles from './nav-item.module.css';


class NavItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <a href="#" className={`
      ${styles.link} 
      ${this.props.active ? styles.link_active : ''} 
      text 
      text_type_main-default
      pl-5 pr-5 pt-4 pb-4
      `}>
        <div className={`${styles.icon} mr-2`}>
          {this.props.icon}
        </div>
        <p className={`
        ${styles.text} 
        text 
        text_type_main-default
        `}>
          {this.props.text}
        </p>
      </a>
    )
  }
}

export default NavItem;