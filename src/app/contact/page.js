// src/pages/Team.js
import React from 'react';
import ResponsiveAppBar from "../components/navbar";
import Footer from "../components/footer";
import ContactUs from '../components/contact';
export default function Team() {
  return (
    <div>
      <ResponsiveAppBar />
      <main >
      <ContactUs />
      </main>
      <Footer />
    </div>
  );
}
