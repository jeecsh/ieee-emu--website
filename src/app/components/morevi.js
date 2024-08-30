"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './more.module.css';

export default function EventsSection() {
    const [isVisible, setIsVisible] = useState(true); // First section is always visible
    const sectionRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const sectionTop = sectionRef.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            // Check if the section is in the viewport
            if (sectionTop < windowHeight && sectionTop + windowHeight > 0) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check initial visibility
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section
            className={`${styles.eventsSection} ${isVisible ? styles.visible : ''}`}
            ref={sectionRef}
        >
            <div className={styles.contentContainer}>
                <h2>Our Student Branch Events</h2>
                <p>
                    Our events are open to everyone, but IEEE student members receive priority registration and discounts. These events are tailored to your interests and offer valuable opportunities for involvement and leadership within the IEEE community.
                </p>
                <button className={styles.ctaButton}>See Our Events</button>
            </div>
            <div className={styles.logoContainer}>
                <Image    
                    src="/emu.png"
                    alt="Floating Logo"
                    width={300}
                    height={300}
                    className={styles.floatingLogo}
                />
            </div>
        </section>
    );
}
