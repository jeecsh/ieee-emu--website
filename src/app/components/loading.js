// pages/index.js

import { useEffect, useState } from "react";
import styles from "./loading.module.css";
import ResponsiveAppBar from '../components/navbar'; 
import Footer from "./footer";
import HeroSec from "./hero2";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // Adjust this time to how long you want the loader to run

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <ResponsiveAppBar />
      <HeroSec/>

    <div className={styles.container}>

      {loading ? (
        
        <div className={styles.loader}>
          <div className={styles.ball}></div>
          <div className={styles.ball}></div>
          <div className={styles.ball}></div>
        </div>
      ) : (
        <h1></h1>
      )}
    </div>
    <Footer/>
    
        </>
  );
}
