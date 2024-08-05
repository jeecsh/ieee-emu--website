// components/num.js
"use client";

import { useEffect, useRef } from 'react';
import styles from './num.module.css'; // Import the CSS module

export default function AnimatedNumbers() {
  const numbers = Array.from({ length: 500 }, (_, i) => i); // Create an array of numbers
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const numbers = containerRef.current.querySelectorAll(`.${styles.number}`);

      numbers.forEach((number) => {
        const rect = number.getBoundingClientRect();
        const dx = clientX - (rect.left + rect.width / 2);
        const dy = clientY - (rect.top + rect.height / 2);
        const distance = Math.sqrt(dx * dx + dy * dy);
        const pushFactor = Math.max(0, 1 - distance / 100); // Adjust the push effect

        number.style.transform = `translate(${dx * pushFactor}px, ${dy * pushFactor}px)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className={styles.heroSection}>
      <div className={styles.animatedNumbers} ref={containerRef}>
        {numbers.map((num, index) => (
          <div
            key={index}
            className={styles.number}
            style={{
              left: `${Math.random() * 100}%`, // Random horizontal position
              animationDuration: `${Math.random() * 10 + 5}s`, // Randomize animation duration
              opacity: 0.2 + Math.random() * 0.5, // Randomize opacity
              transform: `rotate(${Math.random() * 360}deg)`, // Randomize rotation
            }}
          >
            {num % 2} {/* Display numbers 0 or 1 */}
          </div>
        ))}
      </div>
    </section>
  );
}
