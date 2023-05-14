import styles from './modal-overlay.module.css';
import PropTypes from "prop-types";

export default function ModalOverlay({ closePopup }) {
  return (
    <div className={styles.overlay} onClick={closePopup}></div>
  )
}

ModalOverlay.propTypes = {
  closePopup: PropTypes.func.isRequired,
};