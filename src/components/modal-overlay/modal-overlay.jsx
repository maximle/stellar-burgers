import React from 'react';
import styles from './modal-overlay.module.css';

export default function ModalOverlay({ closePopup, children }) {
  return <div className={styles.overlay} onClick={closePopup}>{children}</div>;
}