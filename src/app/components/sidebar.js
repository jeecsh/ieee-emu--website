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
        <Nav className={styles.kk}>
        <Nav.Link href="/" className={styles.customNavLink}>Home</Nav.Link>
              <Nav.Link href="#features" className={styles.customNavLink}>About Us</Nav.Link>
              <Nav.Link href="#pricing" className={styles.customNavLink}>News</Nav.Link>
              <Nav.Link href="/event" className={styles.customNavLink}>Events</Nav.Link>
              <Nav.Link href="#pricing" className={styles.customNavLink}>Our Team</Nav.Link>
              <Nav.Link href="#pricing" className={styles.customNavLink}>Contact Us</Nav.Link>
        </Nav>
      </div>
    </>
  );
}
