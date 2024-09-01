"use client";

import { useEffect, useRef, useState } from 'react';
import styles from './hero.module.css'; 
import Image from 'next/image'; // Import the CSS module

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Debug: Check if sectionRef is correctly assigned
    console.log('sectionRef.current:', sectionRef.current);

    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log('IntersectionObserver entry:', entry); // Debug: Check entry details
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
      id='hero'
      ref={sectionRef} // Ensure the ref is attached
      className={`${styles.heroSection} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.heroContent}>
        <div className={styles.log}>
          <Image 
            src="/ZD.png" // Provide the correct path to your logo
            alt="Logo"
            width={380} // Adjust width as needed
            height={380} // Adjust height as needed
          />
        </div>
        <div className={styles.text}>
          <h1>Welcome to IEEE EMU Student Branch</h1>
          <p>Empowering Innovation, Networking, and Leadership in Engineering and Technology</p>
          <a href="https://forms.gle/example" className={styles.ctabutton}>Join Us Now</a>
          <a href="/learnMore" className={styles.ctaButtonSecondary}>Learn More</a>
        </div>
      </div>
    </section>
  );
}
