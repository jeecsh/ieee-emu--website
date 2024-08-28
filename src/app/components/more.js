"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './more.module.css';

export default function EventsSection() {
    const [firstSectionVisible, setFirstSectionVisible] = useState(true);
    const [secondSectionVisible, setSecondSectionVisible] = useState(false);
    const firstSectionRef = useRef(null);
    const secondSectionRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const firstSectionTop = firstSectionRef.current.getBoundingClientRect().top;
            const secondSectionTop = secondSectionRef.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            // Check if the first section is in the viewport
            if (firstSectionTop < windowHeight && firstSectionTop + windowHeight > 0) {
                setFirstSectionVisible(true);
            } else {
                setFirstSectionVisible(false);
            }

            // Check if the second section is in the viewport
            if (secondSectionTop < windowHeight && secondSectionTop + windowHeight > 0) {
                setSecondSectionVisible(true);
            } else {
                setSecondSectionVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check initial visibility
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <section
                className={`${styles.section} ${styles.firstSection} ${firstSectionVisible ? styles.firstVisible : ''}`}
                ref={firstSectionRef}
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

            <section
                className={`${styles.section} ${styles.secondSection} ${secondSectionVisible ? styles.secondVisible : ''}`}
                ref={secondSectionRef}
            >
                <div className={styles.contentContainer}>
                    <h2> Project Support & Personal Development</h2>
                    <p>    Partnering with IEEE for your projects offers branding benefits, funding opportunities, and assistance with recruitment and promotion. Additionally, being an IEEE member helps you develop key professional skills, including communication and leadership, while connecting you with a global network of professionals.</p>
                    <button className={styles.ctaButton}>contact us</button>
                </div>
                <div className={styles.logoContainer}>
                    <Image
                        src="/pic.png"
                        alt="Another Floating Logo"
                        width={300}
                        height={300}
                        className={styles.floatingLogo}
                    />
                </div>
            </section>
        </>
    );
}
