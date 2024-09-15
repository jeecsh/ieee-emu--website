import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; // Success icon from Material UI
import CloseIcon from '@mui/icons-material/Close'; // Close icon from Material UI
import IconButton from '@mui/material/IconButton'; // IconButton component
import styles from './sucsses.module.css';

const SubscriptionModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={`${styles.modalContent} ${styles.fadeInAnimation}`}>
                {/* Material UI Close Icon Button */}
                <IconButton 
                    className={styles.closeButton} 
                    onClick={onClose} 
                    aria-label="close"
                >
                    <CloseIcon />
                </IconButton>
                
                <CheckCircleIcon className={styles.successIcon} /> {/* Success icon */}
                <h2 className={styles.modalHeading}>Subscription Successful!</h2>
                <p className={styles.modalText}>Thank you for subscribing! Please check your email for further instructions.</p>
            </div>
        </div>
    );
};

export default SubscriptionModal;
