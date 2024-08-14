// components/AboutUs.js
"use client"
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import React, { useEffect, useRef, useState } from 'react';
import styles from './aboutUs.module.css'; // Ensure this CSS module exists

export default function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once the section is visible
        }
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      className={`${styles.aboutUsSection} ${isVisible ? styles.visible : ''}`}
      ref={sectionRef}
    >
      <div className={styles.back}></div>
      <div className={styles.contentContainer}>
        <h2>About IEEE</h2>
        <p>
          The IEEE (Institute of Electrical and Electronics Engineers) is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity. IEEE's core purpose is to foster technological innovation and excellence for the benefit of humanity.
          </p>
          <button className={styles.ctaButton}><p>see ieee.org< KeyboardDoubleArrowRightIcon/> </p></button>
      </div>
    </section>
  );
}
