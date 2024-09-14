"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { IconButton } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'; // Import Downward Arrow Icon
import styles from './more.module.css';

export default function EventsSection() {
    const [firstSectionVisible, setFirstSectionVisible] = useState(true);
    const [sectionsVisible, setSectionsVisible] = useState(false);
    const [secondSectionVisible, setSecondSectionVisible] = useState(false);
    const [thirdSectionVisible, setThirdSectionVisible] = useState(false);
    const [fourthSectionVisible, setFourthSectionVisible] = useState(false);

    const firstSectionRef = useRef(null);
    const secondSectionRef = useRef(null);
    const thirdSectionRef = useRef(null);
    const fourthSectionRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const firstSectionTop = firstSectionRef.current?.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (firstSectionTop !== undefined && firstSectionTop < windowHeight && firstSectionTop + windowHeight > 0) {
                setFirstSectionVisible(true);
            } else {
                setFirstSectionVisible(false);
            }

            if (sectionsVisible) {
                const secondSectionTop = secondSectionRef.current?.getBoundingClientRect().top;
                const thirdSectionTop = thirdSectionRef.current?.getBoundingClientRect().top;
                const fourthSectionTop = fourthSectionRef.current?.getBoundingClientRect().top;

                if (secondSectionTop !== undefined && secondSectionTop < windowHeight && secondSectionTop + windowHeight > 0) {
                    setSecondSectionVisible(true);
                } else {
                    setSecondSectionVisible(false);
                }

                if (thirdSectionTop !== undefined && thirdSectionTop < windowHeight && thirdSectionTop + windowHeight > 0) {
                    setThirdSectionVisible(true);
                } else {
                    setThirdSectionVisible(false);
                }

                if (fourthSectionTop !== undefined && fourthSectionTop < windowHeight && fourthSectionTop + windowHeight > 0) {
                    setFourthSectionVisible(true);
                } else {
                    setFourthSectionVisible(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check initial visibility
        return () => window.removeEventListener('scroll', handleScroll);
    }, [sectionsVisible]);

    const handleSeeMoreClick = () => {
        setSectionsVisible(true);
        
        setTimeout(() => {
            if (secondSectionRef.current) {
                const sectionTop = secondSectionRef.current.getBoundingClientRect().top + window.scrollY;
                const offset = -100; // Adjust this value to your needs
                window.scrollTo({ top: sectionTop + offset, behavior: 'smooth' });
            }
        }, 0); // Adjust delay if necessary
    };

    const handleCloseClick = () => {
        setSectionsVisible(false);
        // Scroll to the first section
        if (firstSectionRef.current) {
            firstSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleContactUsClick = () => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    };

    const handleIEEEExploreClick = () => {
        window.open('https://ieeexplore.ieee.org', '_blank');
    };

    const handleJoinIEEEClick = () => {
        window.open('https://www.ieee.org/membership/join/index.html?WT.mc_id=hc_join', '_blank');
    };
    
    const handleSeeEventsClick = () => {
        window.location.href = '/event';  // Directly navigates to the /events page
    };

    return (
        <>
            <section
                className={`${styles.section} ${styles.firstSection} ${firstSectionVisible ? styles.firstVisible : ''}`}
                ref={firstSectionRef}
            >
                <div className={styles.contentContainer}>
                    <h2 className={styles.hhh}>Student Branch Events</h2>
                    <p>
                        Our events are open to everyone, but IEEE student members receive priority registration and discounts. These events are tailored to your interests and offer valuable opportunities for involvement and leadership within the IEEE community.
                    </p>
                    <button className={styles.ctaButton} onClick={handleSeeEventsClick}>See Our Events</button>
                    <button className={styles.triggerButton} onClick={handleSeeMoreClick}>
                        See More About IEEE
                        <ArrowDownwardIcon className={styles.downArrow} />
                    </button>
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

            {sectionsVisible && (
                <>
                    <section
                        className={`${styles.section} ${styles.secondSection} ${secondSectionVisible ? styles.secondVisible : ''}`}
                        ref={secondSectionRef}
                    >
                        <div className={styles.contentContainer}>
                            <h2 className={styles.h}>Project Support & Personal Development</h2>
                            <p>Partnering with IEEE for your projects offers branding benefits, funding opportunities, and assistance with recruitment and promotion. Additionally, being an IEEE member helps you develop key professional skills, including communication and leadership, while connecting you with a global network of professionals.</p>
                            <button className={styles.ctaButton} onClick={handleContactUsClick}>Contact Us</button>
                        </div>
                        <div className={styles.logoContainer}>
                            <Image
                                src="/employee-engagement2.png"
                                alt="Another Floating Logo"
                                width={300}
                                height={300}
                                className={styles.floatingLogo}
                            />
                        </div>
                    </section>

                    <section
                        className={`${styles.section} ${styles.thirdSection} ${thirdSectionVisible ? styles.thirdVisible : ''}`}
                        ref={thirdSectionRef}
                    >
                        <div className={styles.contentContainer}>
                            <h2 className={styles.h3}>Future Innovations</h2>
                            <p>Explore the future of technology and innovation with IEEE. Our initiatives support cutting-edge research and development, empowering members to lead in a rapidly changing world.</p>
                            <button className={styles.ctaButton} onClick={handleIEEEExploreClick}>IEEE Explore</button>
                        </div>
                        <div className={styles.logoContainer}>
                            <Image
                                src="/innovation.png"
                                alt="Future Floating Logo"
                                width={300}
                                height={300}
                                className={styles.floatingLogo}
                            />
                        </div>
                    </section>

                    <section
                        className={`${styles.section} ${styles.fourthSection} ${fourthSectionVisible ? styles.fourthVisible : ''}`}
                        ref={fourthSectionRef}
                    >
                        <div className={styles.contentContainer}>
                            <h2 className={styles.h4}>Become an IEEE Member</h2>
                            <p>Join IEEE today and contribute to advancing technology while shaping the future of our industry. Enjoy over 80% off IEEE memberships and gain access to exclusive benefits, including job opportunities!</p>
                            <button className={styles.ctaButton} onClick={handleJoinIEEEClick}>Join IEEE</button>
                        </div>
                        <div className={styles.logoContainer}>
                            <Image
                                src="/digital-transformation2.png"
                                alt="Join Us Logo"
                                width={300}
                                height={300}
                                className={styles.floatingLogo}
                            />
                        </div>
                        <div className={styles.upArrowContainer}>
                            <IconButton className={styles.upArrow} onClick={handleCloseClick}>
                                <ArrowUpwardIcon />
                            </IconButton>
                        </div>
                    </section>
                </>
            )}
        </>
    );
}
