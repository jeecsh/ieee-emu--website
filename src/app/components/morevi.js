"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./movi.module.css";

export default function AnotherSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.2 }
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
      className={`${styles.section} ${isVisible ? styles.visible : styles.hidden}`}
      ref={sectionRef}
    >
      <div className={styles.contentContainer}>
        <h2>Another Section</h2>
        <p>This is another section that overlaps the previous one.</p>
        <button className={styles.ctaButton}>Learn More</button>
      </div>
    </section>
  );
}
