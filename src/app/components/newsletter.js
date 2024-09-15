"use client";
import { useState } from 'react';
import styles from './newsletter.module.css';
import { Facebook, Instagram, LinkedIn } from '@mui/icons-material';
import XIcon from '@mui/icons-material/X';
import { IconButton } from '@mui/material';
import SubscriptionModal from '../components/succsess'; // Import the modal

export default function Subscribe() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [message, setMessage] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
    const [loading, setLoading] = useState(false); // State for loading

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true); // Set loading to true

        try {
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, name, surname }),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage('Subscription successful! Thank you for subscribing.');
                setIsModalOpen(true); // Open the modal when subscription is successful
                resetForm(); // Reset form after success
            } else if (response.status === 409) {
                setMessage('This email is already subscribed.');
            } else {
                setMessage(data.message || 'Failed to subscribe. Please try again.');
            }
        } catch (error) {
            setMessage('An error occurred. Please try again later.');
        } finally {
            setLoading(false); // Set loading to false after request
        }
    };

    const resetForm = () => {
        setEmail('');
        setName('');
        setSurname('');
    };

    return (
        <div className={styles.container}>
            <div className={styles.leftSection}>
                <h1 className={styles.heading}>Stay Updated!</h1>
                <p className={styles.description}>
                    Stay ahead in the world of electrical and computer engineering with IEEE EMU SB! Follow our channels and Join our newsletter to receive the latest news and updates directly to your inbox.<br/>
                </p>
                <div className={styles.socialMediaSection}>
                    <IconButton 
                        component="a" 
                        href="https://www.facebook.com/ieee.emu.student.branch" 
                        target="_blank" 
                        aria-label="Facebook"
                        className={styles.icon}
                    >
                        <Facebook />
                    </IconButton>
                    <IconButton 
                        component="a" 
                        href="https://twitter.com/Ieee_emusb?t=pQRMkLsAyZG7QxZTBFjAXQ&s=09" 
                        target="_blank" 
                        aria-label="Twitter"
                        className={styles.icon}
                    >
                        <XIcon/>
                    </IconButton>
                    <IconButton 
                        component="a" 
                        href="https://www.instagram.com/ieee_emu/?igsh=MWpnbzRlc2thcjRpMw%3D%3D" 
                        target="_blank" 
                        aria-label="Instagram"
                        className={styles.icon}
                    >
                        <Instagram />
                    </IconButton>
                    <IconButton 
                        component="a" 
                        href="https://linkedin.com" 
                        target="_blank" 
                        aria-label="LinkedIn"
                        className={styles.icon}
                    >
                        <LinkedIn />
                    </IconButton>
                </div>
            </div>
            <div className={styles.rightSection}>
                <h1 className={styles.formHeading}>Subscribe to Our Newsletter</h1>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <label className={styles.label}>
                        Email:
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className={styles.input}
                        />
                    </label>
                    <label className={styles.label}>
                        Name:
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className={styles.input}
                        />
                    </label>
                    <label className={styles.label}>
                        Surname:
                        <input
                            type="text"
                            value={surname}
                            onChange={(e) => setSurname(e.target.value)}
                            required
                            className={styles.input}
                        />
                    </label>
                    <button type="submit" className={styles.button} disabled={loading}>
                        {loading ? (
                            <div className={styles.loader}>
                                <div className={styles.spinner}></div>
                            </div>
                        ) : (
                            <span>Subscribe</span>
                        )}
                    </button>
                </form>
                {message && <p className={styles.message}>{message}</p>}
            </div>

            {/* Render the Subscription Modal */}
            <SubscriptionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
}
