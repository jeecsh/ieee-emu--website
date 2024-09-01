"use client";
import React, { useState } from 'react';
import styles from './team.module.css';

// Executive Board Members with placeholder names
const teamMembers = [
  { name: 'Person 1', title: 'Advisor', image: '/layered-peaks-haikei.svg' },
  { name: 'Person 2', title: 'President', image: '/layered-peaks-haikei.svg' },
  { name: 'Person 3', title: 'Vice President', image: '/layered-peaks-haikei.svg' },
  { name: 'Person 4', title: 'Treasurer', image: '/layered-peaks-haikei.svg' },
  { name: 'Person 5', title: 'Secretary', image: '/layered-peaks-haikei.svg' },
  { name: 'Person 6', title: 'Webmaster', image: '/layered-peaks-haikei.svg' },
];

// Committee Members
const committeeMembers = {
  Media: [
    { name: 'Person 1', title: 'Media Member 1', image: '/layered-peaks-haikei.svg' },
    { name: 'Person 2', title: 'Media Member 2', image: '/layered-peaks-haikei.svg' },
    { name: 'Person 3', title: 'Media Member 3', image: '/layered-peaks-haikei.svg' },
    { name: 'Person 4', title: 'Media Member 4', image: '/layered-peaks-haikei.svg' },
    { name: 'Person 5', title: 'Media Member 5', image: '/layered-peaks-haikei.svg' },
  ],
  'Program and Events': [
    { name: 'Person 1', title: 'Program Member 1', image: '/layered-peaks-haikei.svg' },
    { name: 'Person 2', title: 'Program Member 2', image: '/layered-peaks-haikei.svg' },
    { name: 'Person 3', title: 'Program Member 3', image: '/layered-peaks-haikei.svg' },
    { name: 'Person 4', title: 'Program Member 4', image: '/layered-peaks-haikei.svg' },
    { name: 'Person 5', title: 'Program Member 5', image: '/layered-peaks-haikei.svg' },
  ],
  'External Affairs': [
    { name: 'Person 1', title: 'External Member 1', image: '/layered-peaks-haikei.svg' },
    { name: 'Person 2', title: 'External Member 2', image: '/layered-peaks-haikei.svg' },
    { name: 'Person 3', title: 'External Member 3', image: '/layered-peaks-haikei.svg' },
    { name: 'Person 4', title: 'External Member 4', image: '/layered-peaks-haikei.svg' },
    { name: 'Person 5', title: 'External Member 5', image: '/layered-peaks-haikei.svg' },
  ],
  'Academic Research': [
    { name: 'Person 1', title: 'Research Member 1', image: '/layered-peaks-haikei.svg' },
    { name: 'Person 2', title: 'Research Member 2', image: '/layered-peaks-haikei.svg' },
    { name: 'Person 3', title: 'Research Member 3', image: '/layered-peaks-haikei.svg' },
    { name: 'Person 4', title: 'Research Member 4', image: '/layered-peaks-haikei.svg' },
    { name: 'Person 5', title: 'Research Member 5', image: '/layered-peaks-haikei.svg' },
  ],
  Development: [
    { name: 'Person 1', title: 'Development Member 1', image: '/layered-peaks-haikei.svg' },
    { name: 'Person 2', title: 'Development Member 2', image: '/layered-peaks-haikei.svg' },
    { name: 'Person 3', title: 'Development Member 3', image: '/layered-peaks-haikei.svg' },
    { name: 'Person 4', title: 'Development Member 4', image: '/layered-peaks-haikei.svg' },
    { name: 'Person 5', title: 'Development Member 5', image: '/layered-peaks-haikei.svg' },
  ],
};

// Main Component
export default function OurTeam() {
  const [selectedCommittee, setSelectedCommittee] = useState('Media');

  return (
    <div className={styles.ourTeam}>
      <section className={styles.executiveBoard}>
        <h2>Executive Board</h2>
        <div className={styles.memberList}>
          {teamMembers.map((member) => (
            <div key={member.title} className={styles.member}>
              <img src={member.image} alt={member.title} className={styles.memberImage} />
              <h3 className={styles.memberName}>{member.name}</h3>
              <p className={styles.memberTitle}>{member.title}</p>
            </div>
          ))}
        </div>
      </section>
      
      <section className={styles.committees}>
        <h2>Our Committees</h2>
        <nav className={styles.committeeNav}>
          {Object.keys(committeeMembers).map((committee) => (
            <div
              key={committee}
              className={`${styles.committeeNavItem} ${selectedCommittee === committee ? styles.active : ''}`}
              onClick={() => setSelectedCommittee(committee)}
            >
              {committee}
            </div>
          ))}
          <div className={styles.navLine} style={{ transform: `translateX(${Object.keys(committeeMembers).indexOf(selectedCommittee) * 100}%)` }} />
        </nav>
        <div className={styles.committeeList}>
          {committeeMembers[selectedCommittee].map((member) => (
            <div key={member.name} className={styles.committeeMember}>
              <img src={member.image} alt={member.name} className={styles.committeeMemberImage} />
              <h3 className={styles.committeeMemberName}>{member.name}</h3>
              <p className={styles.committeeMemberTitle}>{member.title}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
