"use client";

import React, { useState } from 'react';
import styles from './learn.module.css';
import ResponsiveAppBar from "../components/navbar";
import Footer from "../components/footer";
export default function LearnMorePage() {
  const [isBoardFull, setIsBoardFull] = useState(false);

  const handleJoinBoard = () => {
    setIsBoardFull(true);
    alert('There is no application form now. Seats are full.');
  };

  return (
    <>
      <ResponsiveAppBar />
      <div className={styles.pageContainer}>
        <h1 className={styles.title}>Join IEEE Community</h1>
        
        <section className={styles.section}>
          <h2 className={styles.hh}>IEEE Membership</h2>
          <p>
            Becoming an IEEE member offers numerous benefits including access to
            cutting-edge research, professional development opportunities, and a
            global network of peers and experts. As a member, you can take part in
            exclusive conferences, workshops, and publications that advance your
            career and knowledge in engineering and technology.
          </p>
          <a href="https://www.ieee.org/membership/join/index.html?WT.mc_id=hc_join" className={styles.ctaButton} target="_blank" rel="noopener noreferrer">
          Get IEEE Membership
          </a>
        </section>

        <section className={styles.section}>
          <h2 className={styles.hh}>Join Our Student Branch</h2>
          <p>
            Our student branch is a vibrant community dedicated to fostering
            technical innovation and leadership. We have two main segments:
            the Executive Board and the Committees. The Executive Board includes
            leadership roles that help guide our activities, while the Committees
            focus on specific areas such as events, media, and outreach.
          </p>
          <button className={styles.ctaButton} onClick={handleJoinBoard} disabled={isBoardFull}>
            Join the Executive Board
          </button>
          <a href="https://forms.gle/example" className={styles.ctaButton} target="_blank" rel="noopener noreferrer">
            Join a Committee
          </a>
          {isBoardFull && (
            <p className={styles.alert}>There is no application form now. Seats are full.</p>
          )}
        </section>
        <h2 className={styles.title}>Frequnly asked questions</h2>
        <section className={styles.section}>
         
          <div className={styles.faqItem}>
            <h3 className={styles.hh}>What are the benefits of IEEE membership?</h3>
            <p>IEEE members gain access to exclusive research, professional development opportunities, and networking events.</p>
          </div>
          <div className={styles.faqItem}>
            <h3 className={styles.hh}>How can I join the IEEE student branch?</h3>
            <p>You can join by applying through our committee or executive board section on the student branch website.</p>
          </div>
          <div className={styles.faqItem}>
            <h3 className={styles.hh}>Where can I find more information?</h3>
            <p>For more details, visit the IEEE website or contact us directly through our provided channels.</p>
          </div>
          <p>Feel free to <a href="mailto:ieee.emubranch@gmail.com" className={styles.contactLink}>contact us</a> for any further questions.</p>
        </section>
      </div>
      <Footer />
    </>
  );
}
