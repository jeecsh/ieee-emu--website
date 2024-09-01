import React from 'react';
import styles from './contact.module.css'; // Import your CSS module
import Footer from '../components/footer'; // Import the Footer component

export default function ContactUs() {
  return (
    <div className={styles.wrapper} id="contact">
      <div className={styles.contactSection}>
        <h2 className={styles.hdd}>Contact Us</h2>
        <div className={styles.contactContainer}>
          <div className={styles.contactInfo}>
            <p>If you have any inquiries regarding our club, or would like to reach out to us about our events, please send us an email!</p>
            <p><strong>Email Us:</strong> <a href="mailto:ieee.emubranch@gmail.com" className={styles.email}>ieee.emubranch@gmail.com</a></p>
            <p><strong>Address:</strong></p>
            <p>
              Electrical and Electronic Engineering Department,<br />
              Eastern Mediterranean University,<br />
              KKTC 99628, Gazimagusa 7200
            </p>
          </div>
          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.478466483555!2d33.90496427478706!3d35.144686272765085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14dfc9e09b1ff08b%3A0xc461826ee03224e1!2sElectrical%20and%20Electronics%20Engineering%2C%20Gazima%C4%9Fusa%2099450!5e0!3m2!1sen!2s!4v1725114196303!5m2!1sen!2s"
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
