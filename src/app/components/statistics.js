"use client";
import React from "react";
import Counter from "./counter"; // Import the Counter component
import styles from "./statics.module.css"; // Import the CSS module

// Main component displaying three divs
export default function CounterStats() {
  const duration = 2000; // Total duration for the counting animation in milliseconds

  return (
    <div className={styles.counterRow}>
      <Counter
      over="over"
        targetNumber={3500}
        label="IEEE Student Branches"
        description="Over 3500 student branches around the world."
        duration={duration}
      />
      <Counter
over="over"
        targetNumber={400000}
        label="Students"
        description="Over 400,000 students are part of IEEE globally."
        duration={duration}
      />
      <Counter
      over="total of"
        targetNumber={160}
        label="Countries"
        description="IEEE student branches exist in 160 countries."
        duration={duration}
      />
    </div>
  );    
}
