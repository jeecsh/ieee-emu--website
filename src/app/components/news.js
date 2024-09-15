"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './more.module.css';

export default function NewsSection() {
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

    const handleReadArticlesClick = () => {
        // Logic to scroll to the articles section or navigate to it
        window.location.href = '/news'; // Update this to your actual articles page URL
    };

    const handleLatestNewsClick = () => {
        // Logic to open the news section or navigate to the latest news page
        window.location.href = '/https://ieeexplore.ieee.org/xpl/topAccessedArticles.jsp?punumber=6287639'; // Update this to your actual news page URL
    };

    return (
        <section
            className={`${styles.section} ${styles.firstSection} ${firstSectionVisible ? styles.firstVisible : ''}`}
            ref={firstSectionRef}
        >
            <div className={styles.contentContainer}>
                <h2 className={styles.hhh}>Latest News & Articles</h2>
                <p>
                    Stay up-to-date with the latest trends, insights, and happenings in our community. Read our in-depth articles, breaking news, and thoughtful editorials that keep you informed and inspired.
                </p>
                <button className={styles.ctaButton} onClick={handleReadArticlesClick}>Explore Latest Branch News</button>
                <button className={styles.triggerButton} onClick={handleLatestNewsClick}>Read IEEE Articles</button>
            </div>
            <div className={styles.logoContainer}>
                <Image    
                    src="/journal2.png"
                    alt="News Logo"
                    width={300}
                    height={300}
                    className={styles.floatingLogo}
                />
            </div>
        </section>
    );
}
