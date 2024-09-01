"use client"
import { useEffect, useState, useRef } from 'react';
import styles from './qoute.module.css';

export default function Quote() {
  const [visibleSections, setVisibleSections] = useState([]);
  const containerRef = useRef(null); // Ref to the container

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const scrollPosition = window.scrollY + viewportHeight * 0.6; // Adjust multiplier to control trigger point
      const elements = document.querySelectorAll(`.${styles.quoteText}`);
      const currentlyVisible = [];

      elements.forEach((element, index) => {
        const elementTop = element.getBoundingClientRect().top + window.scrollY;
        const elementBottom = elementTop + element.offsetHeight;

        // Trigger the effect when the element is within the viewport height plus offset
        if (scrollPosition > elementTop && scrollPosition < elementBottom + viewportHeight * 0.5) {
          currentlyVisible.push(index);
        }
      });

      setVisibleSections(currentlyVisible);
    };

    const handleScrollResistance = () => {
      if (containerRef.current) {
        const scrollY = window.scrollY;
        // Apply a transform to create resistance
        // Lower multiplier value will create more resistance
        containerRef.current.style.transform = `translateY(${scrollY * 0.1}px)`;
      }
    };

    // Add scroll event listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScrollResistance);
    handleScroll(); // Trigger on initial load

    // Clean up event listeners
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScrollResistance);
    };
  }, []);

  return (
    <div ref={containerRef} className={styles.container}>
      <div className={styles.gradientOverlay}></div>
      <h1 className={`${styles.quoteText} ${styles.shapeYour} ${visibleSections.includes(0) ? styles.scrollInView : ''}`}>
        Shape your
      </h1>
      <h1 className={`${styles.quoteText} ${styles.future} ${visibleSections.includes(1) ? styles.scrollInView : ''}`}>
        Future
      </h1>
      <h1 className={`${styles.quoteText} ${styles.elevateYour} ${visibleSections.includes(2) ? styles.scrollInView : ''}`}>
        And
      </h1>
      <h1 className={`${styles.quoteText} ${styles.elevateYour} ${visibleSections.includes(2) ? styles.scrollInView : ''}`}>
        Elevate your academic
      </h1>
      <h1 className={`${styles.quoteText} ${styles.journey} ${visibleSections.includes(3) ? styles.scrollInView : ''}`}>
        Journey
      </h1>
      <h1 className={`${styles.quoteText} ${styles.with} ${visibleSections.includes(4) ? styles.scrollInViewWith : ''}`}>
        With
      </h1>
    </div>  
  );
}
