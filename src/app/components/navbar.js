"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './navbar.module.css'; // Import the custom CSS module
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image';
import WindowIcon from '@mui/icons-material/Window';// Import MenuOpenIcon

export default function ColorSchemesExample() {
  return (
    <>
      <Navbar className={styles.customNavbar}variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#" className={styles.customNavbarBrand}>
            <div className={styles.logo}>
              <Image 
                src="/ZD.png" // Provide the correct path to your logo
                alt="Logo"
                width={100} // Adjust width as needed
                height={100} // Adjust height as needed
              />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon">
              < WindowIcon style={{ color: '#ffffff', fontSize: '30px' }} /> {/* Customize icon size and color */}
            </span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home" className={styles.customNavLink}>Home</Nav.Link>
              <Nav.Link href="#features" className={styles.customNavLink}>AboutUs</Nav.Link>
              <Nav.Link href="#pricing" className={styles.customNavLink}>Events</Nav.Link>
              <Nav.Link href="#pricing" className={styles.customNavLink}>ContactUS</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
