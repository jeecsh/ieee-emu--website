"use client";

import { useEffect, useState } from 'react';
import styles from './hero2.module.css';

export default function HeroSec() {
  const [isVisible, setIsVisible] = useState(true); // Set to true by default

  return (
    <section className={`${styles.heroSection} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.overlay}></div>

      {/* Background spans */}
      {Array(1000).fill(0).map((_, i) => (
        <span key={i} className={styles.bgSpan}></span>
      ))}

      {/* Replace Sign-In form with the desired content */}
    </section>
  );
}
