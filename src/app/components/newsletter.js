"use client";
import { useState, useRef } from 'react';
import styles from './newsletter.module.css';
import { Facebook, Instagram, LinkedIn } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import XIcon from '@mui/icons-material/Close'; // Changed to the Material UI Close icon
import SubscriptionModal from '../components/succsess'; // Import the modal

export default function Subscribe() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [message, setMessage] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
    const [loading, setLoading] = useState(false); // State for loading
    const [emailError, setEmailError] = useState(''); // State for email error

    // Define the ref for the section
    const sectionRef = useRef(null);

    // Function to scroll to the section
    const scrollToSection = () => {
        if (sectionRef.current) {
            sectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Simple email validation function
    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setEmailError(''); // Reset email error message
        setLoading(true); // Set loading to true

        if (!validateEmail(email)) {
            setEmailError('Invalid email format');
            setLoading(false); // Stop loading
            return;
        }

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
        <>
            {/* Add a button or other trigger to scroll to the section */}
            <button onClick={scrollToSection}>Go to Newsletter Section</button>
            
            <section id="newslet" ref={sectionRef}>
                <div className={styles.container}>
                    <div className={styles.leftSection}>
                        <h1 className={styles.heading}>Stay Updated!</h1>
                        <p className={styles.description}>
                            Stay ahead in the world of electrical and computer engineering with IEEE EMU SB! Follow our channels and join our newsletter to receive the latest news and updates directly to your inbox.<br/>
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
                                <XIcon />
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
                                {emailError && <p className={styles.error}>{emailError}</p>} {/* Display email error */}
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
            </section>
        </>
    );
}
