import styles from './loading.module.css'; // Make sure to create this CSS file

export default function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.spinner}></div>
      <p className={styles.p}>Loading ...</p>
    </div>
  );
}
