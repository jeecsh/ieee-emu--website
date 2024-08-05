// components/InfoSection.js

import styles from './info.module.css'; // Import the CSS module

export default function InfoSection() {
  return (
    <section className={styles.infoSection}>
      <div className={styles.infoGrid}>
        <div className={styles.infoItem}>
          <h3>Instagram</h3>
          <p>Like us on Instagram to get the latest updates on our events and registration.</p>
        </div>
        <div className={styles.infoItem}>
          <h3>Newsletter</h3>
          <p>Sign up for our monthly newsletter. Receive information about IEEE UofT events, updates, and other useful stuff right in your inbox!</p>
        </div>
        <div className={styles.infoItem}>
          <h3>IEEE Membership</h3>
          <p>More than 80% discount for IEEE memberships and receive various exclusive benefits including job opportunities!</p>
        </div>
      </div>
    </section>
  );
}
