"use client";
import React from 'react';
import { Nav } from 'react-bootstrap';
import CloseIcon from '@mui/icons-material/Close'; // Import CloseIcon
import styles from './sidebar.module.css'; // Import the custom CSS module for Sidebar

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <CloseIcon className={styles.closeBtn} onClick={onClose} aria-label="Close menu" />
        <Nav className="flex-column">
          <Nav.Link href="/" className={styles.navLink}>Home</Nav.Link>
          <Nav.Link href="#features" className={styles.navLink}>About Us</Nav.Link>
          <Nav.Link href="/event" className={styles.navLink}>Events</Nav.Link>
          <Nav.Link href="#pricing" className={styles.navLink}>Contact Us</Nav.Link>
        </Nav>
      </div>
    </>
  );
}
