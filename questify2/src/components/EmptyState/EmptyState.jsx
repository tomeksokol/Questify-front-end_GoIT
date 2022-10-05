import image from '../../images/emptyState/empty.png';
import styles from './EmptyState.module.css'
export const EmptyState = () => {
    return (
        <div className={styles.empty__wrapper}>
            <img src={image} alt="brak" className={styles.empty__image} />
          <p>"Hmmm... that orange button must be important..."</p>
        </div>
    )
}