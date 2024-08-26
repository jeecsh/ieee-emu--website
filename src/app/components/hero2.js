"use client";

import { useEffect, useState } from 'react';
import styles from './hero2.module.css';

export default function HeroSec() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Assuming the first and second sections each have a height of 100vh
      const firstSectionHeight = window.innerHeight;
      const secondSectionHeight = window.innerHeight;

      // Check if the scroll position has passed the height of the first two sections
      if (window.scrollY > firstSectionHeight + secondSectionHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
