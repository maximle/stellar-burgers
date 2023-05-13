import React from 'react';
import styles from './modal-overlay.module.css';
import PropTypes from "prop-types";

export default function ModalOverlay({ closePopup, children }) {
  return (
    <div className={styles.overlay} >
      {children}
      <div className={styles['bottom-overlay']} onClick={closePopup}></div>
    </div>
  )
}

ModalOverlay.propTypes = {
  closePopup: PropTypes.func,
  children: PropTypes.element
};

// export default function ModalOverlay({ closePopup, children }) {
//   return (
//     <div className={styles.overlay} onClick={closePopup}>
//       {children}
//       {/* <div className={styles['bottom-overlay']} onClick={closePopup}></div> */}
//     </div>
//   )
// }