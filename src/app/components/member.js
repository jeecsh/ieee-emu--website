"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './more.module.css';

export default function JoinSection() {
    const [firstSectionVisible, setFirstSectionVisible] = useState(true);
    const [sectionsVisible, setSectionsVisible] = useState(false);

    const firstSectionRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const firstSectionTop = firstSectionRef.current?.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (firstSectionTop !== undefined && firstSectionTop < windowHeight && firstSectionTop + windowHeight > 0) {
                setFirstSectionVisible(true);
            } else {
                setFirstSectionVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check initial visibility
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSeeTeamClick = () => {
        // Logic to scroll to the team section or navigate to it
        // For example:
        window.location.href = '/team'; // Update this to your actual team page URL
    };

    const handleBecomeMemberClick = () => {
        // Logic to open the membership form or navigate to the membership page
        // For example:
        window.location.href = '/learnMore'; // Update this to your actual membership page URL
    };

    return (
        <section
            className={`${styles.section} ${styles.firstSection} ${firstSectionVisible ? styles.firstVisible : ''}`}
            ref={firstSectionRef}
        >
            <div className={styles.contentContainer}>
                <h2 className={styles.hhh}>Join Our Student Branch</h2>
                <p>
                    Interested in becoming a part of our student branch? Discover our team and learn more about our mission and activities. Joining us will provide you with exclusive opportunities and a chance to make a significant impact.
                </p>
                <button className={styles.ctaButton} onClick={handleSeeTeamClick}>See Our Team</button>
                <button className={styles.triggerButton} onClick={handleBecomeMemberClick}>Become a Branch Member</button>
            </div>
            <div className={styles.logoContainer}>
                <Image    
                    src="/group.png"
                    alt="Floating Logo"
                    width={300}
                    height={300}
                    className={styles.floatingLogo}
                />
            </div>
        </section>
    );
}
