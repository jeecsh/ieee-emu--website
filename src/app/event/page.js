"use client";
import { useState, useEffect } from "react";
import styles from './event.module.css'; // Custom CSS
import ResponsiveAppBar from "../components/navbar";
import Footer from "../components/footer";
import EventCard from "../components/eventcard"; // Import EventCard

// Example events datae
const eventsData = [
  {
    id: 1,
    title: "IEEEEXTREME",
    date: "2024-10-03", // Ensure the date is in the correct format (YYYY-MM-DD)
    time: "2:00 pm - 5:00 pm", // Add the event time
    description: "An annual hackathon and competitive programming challenge.",
    location: "Online",
    bio: "Organized by the IEEE EMU Student Branch to promote coding and teamwork."
  },
  {
    id: 2,
    title: "Annual Meeting",
    date: "2024-05-03",
    time: "10:00 am - 12:00 pm",
    description: "Year-end IEEE EMU SB Annual Meeting.",
    location: "EEE Engineering Building ",
    bio: "This meeting includes a detailed overview of the year's progress and future plans."
  }
];


export default function NewsPage() {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);

  useEffect(() => {
    const today = new Date();
    
    // Filter events by upcoming and past
    const upcoming = eventsData.filter(event => new Date(event.date) > today);
    const past = eventsData.filter(event => new Date(event.date) <= today);

    // Sort events by date (ascending for upcoming, descending for past)
    setUpcomingEvents(upcoming.sort((a, b) => new Date(a.date) - new Date(b.date)));
    setPastEvents(past.sort((a, b) => new Date(b.date) - new Date(a.date)));
  }, []);

  return (
    <>
      <ResponsiveAppBar />
      <div className={styles.container}>
        <h1 className={styles.heading}>Events</h1>

        <div className={styles.eventsContainer}>
          {/* Upcoming Events Section */}
          <div className={styles.eventsSection}>
            <h2 className={styles.subheading}>Upcoming Events</h2>
            {upcomingEvents.length > 0 ? (
              upcomingEvents.map(event => (
                <EventCard key={event.id} event={event} /> // Use EventCard component
              ))
            ) : (
              <p>No upcoming events.</p>
            )}
          </div>

          {/* Past Events Section */}
          <div className={styles.eventsSection}>
            <h2 className={styles.subheading}>Past Events</h2>
            {pastEvents.length > 0 ? (
              pastEvents.map(event => (
                <EventCard key={event.id} event={event} /> // Use EventCard component
              ))
            ) : (
              <p>No past events available.</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
