// src/pages/Team.js
import React from 'react';
import OurTeam from '../components/team'; // Adjust the path as needed
import ResponsiveAppBar from "../components/navbar";
import Footer from "../components/footer";
import styles from "./teams.module.css"
export default function Team() {
  return (
    <div>
      <ResponsiveAppBar />
      <main className={styles.teamPage}>
        <OurTeam />
      </main>
      <Footer />
    </div>
  );
}
