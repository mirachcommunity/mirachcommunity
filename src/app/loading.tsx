import styles from './loading.module.css';

export default function Loading() {
  return (
    <div className={styles.container}>
      <div className={styles.loader}>
        <div className={`${styles.dot} ${styles.dot1}`}></div>
        <div className={`${styles.dot} ${styles.dot2}`}></div>
        <div className={`${styles.dot} ${styles.dot3}`}></div>
      </div>
    </div>
  );
}