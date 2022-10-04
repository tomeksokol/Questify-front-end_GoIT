import styles from './CompleteQuestModal.module.css'


const CompleteTaskModal = ({ title, handleClose }) => {
    return (
      <div className={styles.modal__wrapper}>
        <div className={styles.modal}>
          <p>{title}</p>
          <div className={styles.buttons__wrapper}>
            <button
              type="button"
              onClick={handleClose}
              className={styles.button_cancel}
            >
              CLOSE
            </button>
          </div>
        </div>
      </div>
    );
}

export default CompleteTaskModal;