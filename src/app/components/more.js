// components/AnimatedSection.js
"use client";
import React, { useEffect, useState } from 'react';
import styles from './more.module.css'; // Import your CSS module
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

export default function AnimatedSection() {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    const section = document.getElementById('animated-section');
    if (section) {
      const { top, bottom } = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      if (top < viewportHeight && bottom > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="animated-section" className={styles.animatedSection}>
      <div
        className={`${styles.background} ${scrolling ? styles.scrolling : ''}`}
        style={{ backgroundImage: `url("/ZD.png")` }} // Apply the background image
      />
      <div className={styles.content}>
        <h2 className={`${styles.heading} ${scrolling ? styles.fadeIn : ''}`}>Student Branch Events</h2>
        </div>
        <div className={styles.contentj}>
        <p className={`${styles.paragraph} ${scrolling ? styles.fadeIn : ''}`}>
          Our events are open to everyone, but IEEE student members receive priority registration and discounts. These events are tailored to your interests and offer valuable opportunities for involvement and leadership within the IEEE community.
        </p>
        <button className={styles.button}><p>See Events< KeyboardDoubleArrowRightIcon/> </p></button>
      </div>
    </section>
  );
}
