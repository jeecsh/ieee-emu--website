"use client";
import React, { useEffect, useRef, useState } from 'react';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import styles from './aboutUs.module.css';

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
      { threshold: 0.1 }
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
      id="aboutus"
      className={`${styles.aboutUsSection} ${isVisible ? styles.visible : ''}`}
      ref={sectionRef}
    >
      {/* IEEE Logo */}
      <img src="/ieee.png" alt="IEEE Logo" className={styles.ieeeLogo} />

      {/* Content Container */}
      <div className={styles.contentContainer}>
        <div className={styles.textAndButtonContainer}>
          <p>
            The IEEE (Institute of Electrical and Electronics Engineers) is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity. IEEE's core purpose is to foster technological innovation and excellence for the benefit of humanity.
          </p>
          <a href="https://www.ieee.org" target="_blank" rel="noopener noreferrer">
            <button className={styles.ctaButton}>
              <p>See ieee.org</p>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
