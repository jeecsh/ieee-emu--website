"use client";

import React, { useEffect, useState, useRef } from "react";
import styles from "./statics.module.css"; // Import the CSS module

export default function Counter({ targetNumber, label, description, duration, over }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false); // Track visibility
  const counterRef = useRef(null); // Ref for the counter element

  useEffect(() => {
    // Intersection Observer setup
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(counterRef.current); // Stop observing after visibility is detected
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is in view
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return; // Only run counting logic if visible

    const incrementStep = Math.ceil(targetNumber / (duration / 10)); // Increment per interval
    const interval = setInterval(() => {
      setCount((prevCount) => {
        const newCount = prevCount + incrementStep;
        if (newCount >= targetNumber) {
          clearInterval(interval);
          return targetNumber;
        }
        return newCount;
      });
    }, 10); // Update every 10ms

    return () => clearInterval(interval);
  }, [isVisible, targetNumber, duration]);

  // Function to format numbers with suffixes
  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M'; // Millions
    if (num >= 1000) return (num / 1000).toFixed(1) + 'k'; // Thousands
    return num;
  };

  return (
    <div className={styles.counterDiv} ref={counterRef}>
      <p className={styles.counterLabel}>{over}</p>
      <div className={styles.counterNumberWrapper}>
        <h1 className={`${styles.counterNumber} ${styles.animate}`}>{formatNumber(count)}</h1>
      </div>
      <p className={styles.counterLabel}>{label}</p>
      <p className={styles.counterDescription}>{description}</p>
    </div>
  );
}
