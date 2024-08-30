import React from 'react';
import styles from './contact.module.css'; // Import your CSS module
import Footer from '../components/footer'; // Import the Footer component

export default function ContactUs() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contactSection}>
        <h2 className={styles.hdd}>Contact Us</h2>
        <div className={styles.contactContainer}>
          <div className={styles.contactInfo}>
            <p>If you have any inquiries regarding our club, or would like to reach out to us about our events, please send us an email!</p>
            <p><strong>Email Us:</strong> <a href="mailto:general@ieee.utoronto.ca" className={styles.email}>general@ieee.utoronto.ca</a></p>
            <p><strong>Address:</strong></p>
            <p>
              Electrical and Electronic Engineering Department,<br />
              Eastern Mediterranean University,<br />
              KKTC 99628, Gazimagusa 7200
            </p>
          </div>
          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2042.6882621542646!2d33.9077062!3d35.1445899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14dfc9e09b82fb0b%3A0x780d6ce9c3dc8cca!2sDepartment%20of%20Electrical%20%26%20Electronic%20Engineering!5e0!3m2!1sen!2str!4v1691940529175!5m2!1sen!2str"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
          
        </div>
        
      </div>
    </div>
  );
}
