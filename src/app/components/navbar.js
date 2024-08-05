"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './navbar.module.css'; // Import the custom CSS module
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image';

function ColorSchemesExample() {
  return (
    <>
      <Navbar className={styles.customNavbar}>
        <Container>
            <div className={styles.logo}> 
            <Image 
              src="/ZD.png" // Provide the correct path to your logo
              alt="Logo"
              width={100} // Adjust width as needed
              height={100} // Adjust height as needed
            />
            </div>
          <div className={styles.jj}>
            <Nav.Link href="#home" className={styles.customNavLink}>Home</Nav.Link>
            <Nav.Link href="#features" className={styles.customNavLink}>about us</Nav.Link>
            <Nav.Link href="#pricing" className={styles.customNavLink}>contact</Nav.Link>
            </div>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
