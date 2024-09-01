  "use client";
  import 'bootstrap/dist/css/bootstrap.min.css';
  import styles from './navbar.module.css'; // Import the custom CSS module
  import Container from 'react-bootstrap/Container';
  import Navbar from 'react-bootstrap/Navbar';
  import Nav from 'react-bootstrap/Nav';
  import Image from 'next/image';
  import Sidebar from './sidebar'; // Import the Sidebar component
  import { useState, useEffect } from 'react';

  export default function ColorSchemesExample() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const toggleNav = () => setIsNavOpen(!isNavOpen);

    // Handle scrolling
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroSectionHeight = 500; // Adjust this value to the actual height of your hero section

      if (currentScrollY > heroSectionHeight) { // Only trigger after scrolling past the hero section
        if (currentScrollY > lastScrollY) {
          setShowNavbar(false); // Hide navbar when scrolling down
        } else {
          setShowNavbar(true); // Show navbar when scrolling up
        }
      } else {
        setShowNavbar(true); // Always show navbar in hero section
      }

      setLastScrollY(currentScrollY);
    };

    useEffect(() => {
      // Add scroll event listener
      window.addEventListener('scroll', handleScroll);

      return () => {
        // Cleanup the event listener on component unmount
        window.removeEventListener('scroll', handleScroll);
      };
    }, [lastScrollY]);

    return (
      <>
        {/* Apply the `hideNavbar` class when the navbar should be hidden */}
        <Navbar className={`${styles.customNavbar} ${!showNavbar ? styles.hideNavbar : ''}`} variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#hero" className={styles.customNavbarBrand}>
              <div className={styles.logo}>
                <Image 
                  src="/ZD.png" // Provide the correct path to your logo
                  alt="Logo"
                  width={100} // Adjust width as needed
                  height={100} // Adjust height as needed
                />
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleNav} className={styles.togglericon} />
            <Navbar.Collapse id="basic-navbar-nav" className={isNavOpen ? styles.hideNav : ''}>
              <Nav className={styles.jj}>
                <Nav.Link href="/" className={styles.customNavLink}>Home</Nav.Link>
                <Nav.Link href="#aboutus" className={styles.customNavLink}>About Us</Nav.Link>
                <Nav.Link href="#news" className={styles.customNavLink}>News</Nav.Link>
                <Nav.Link href="/event" className={styles.customNavLink}>Events</Nav.Link>
                <Nav.Link href="/team" className={styles.customNavLink}>Our Team</Nav.Link>
                <Nav.Link href="/contact" className={styles.customNavLink}>Contact Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Sidebar isOpen={isNavOpen} onClose={toggleNav} />
          </Container>
        </Navbar>
      </>
    );
  }
