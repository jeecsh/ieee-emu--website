// components/AnimatedSection.js
"use client";
import React, { useEffect, useState } from 'react';
import styles from './movi.module.css'; // Import your CSS module
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

export default function AnimatedSection() {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    const section = document.getElementById('animatedvii-section');
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
    <section id="animatedvii-section" className={styles.animatedSection}>
      <div
        className={`${styles.background} ${scrolling ? styles.scrolling : ''}`}
        style={{ backgroundImage: `url("/ZD.png")` }} // Apply the background image
      />
      <div className={styles.content}>
        <h2 className={`${styles.heading} ${scrolling ? styles.fadeIn : ''}`}> Project Support & Personal Development</h2>
        <p className={`${styles.paragraph} ${scrolling ? styles.fadeIn : ''}`}>
       
        Partnering with IEEE for your projects offers branding benefits, funding opportunities, and assistance with recruitment and promotion. Additionally, being an IEEE member helps you develop key professional skills, including communication and leadership, while connecting you with a global network of professionals.
        </p>
        <button className={styles.button}><p>contact us< KeyboardDoubleArrowRightIcon/> </p></button>
      </div>
    </section>
  );
}
