import React from 'react';
import ReactDOM from 'react-dom';
import styles from './modal.module.css';
import { modalRoot } from '../../utils/constants';
import ModalOverlay from '../modal-overlay/modal-overlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from "prop-types";


export default function Modal({ children, closePopup }) {
  React.useEffect(() => {
    const closePopupByEsc = (e) => {
      if (e.key === 'Escape') {
        closePopup();
      }
    }

    document.addEventListener('keydown', closePopupByEsc);
    return () => {
      document.removeEventListener('keydown', closePopupByEsc);
    }
  }, []);

  return (
    ReactDOM.createPortal(
        <>
          <ModalOverlay closePopup={closePopup}>
            <div className={`${styles.modal}`}>
              <button className={`${styles.closeButton}`} type='button' onClick={closePopup}>
                <CloseIcon type="primary" onClick={closePopup}/>
              </button>
              {children}
            </div>
          </ModalOverlay>
        </>, 
        modalRoot
    )
  )
}

Modal.propTypes = {
  children: PropTypes.element,
  closePopup: PropTypes.func,
};