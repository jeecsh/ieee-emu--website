"use client";

import React from 'react';
import { Nav } from 'react-bootstrap';
import CloseIcon from '@mui/icons-material/Close'; // Import CloseIcon
import styles from './sidebar.module.css'; // Import the custom CSS module for Sidebar

export default function Sidebar({ isOpen, onClose }) {
  const handleNavClick = () => {
    onClose(); // Close the sidebar when a menu item is clicked
  };

  return (
    <>
      <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <CloseIcon className={styles.closeBtn} onClick={onClose} aria-label="Close menu" />
        <Nav className={styles.kk}>
          <Nav.Link href="/" className={styles.customNavLink} onClick={handleNavClick}>Home</Nav.Link>
          <Nav.Link href="/https://ieee-emu-website.vercel.app/#newslet" className={styles.customNavLink} onClick={handleNavClick}>NewsLetter</Nav.Link>
          <Nav.Link href="https://ieee-emu-website.vercel.app/#aboutus" className={styles.customNavLink} onClick={handleNavClick}>About Us</Nav.Link>
          <Nav.Link href="/news" className={styles.customNavLink} onClick={handleNavClick}>News</Nav.Link>
          <Nav.Link href="/event" className={styles.customNavLink} onClick={handleNavClick}>Events</Nav.Link>
          <Nav.Link href="/team" className={styles.customNavLink} onClick={handleNavClick}>Our Team</Nav.Link>
          <Nav.Link href="/contact" className={styles.customNavLink} onClick={handleNavClick}>Contact Us</Nav.Link>

        </Nav>
      </div>
    </>
  );
}
