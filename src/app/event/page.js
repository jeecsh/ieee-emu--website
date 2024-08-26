"use client";
import { useState, useEffect } from "react";
import styles from './event.module.css'; // Custom CSS
import ResponsiveAppBar from "../components/navbar";
import Footer from "../components/footer";
import EventCard from "../components/eventcard"; // Import EventCard

export default function NewsPage() {
  const [events, setEvents] = useState([]); // Initialize as an empty array
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);

  // Fetch events data from the API
  useEffect(() => {
    fetch('/api/events')
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched events data:", data); // Check the fetched data
        setEvents(data);
      })
      .catch((error) => {
        console.error("Failed to fetch events:", error);
      });
  }, []);

  // Filter and sort events into upcoming and past
  useEffect(() => {
    if (Array.isArray(events)) { // Ensure events is an array before filtering
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Reset time to midnight to accurately compare just the date

      const upcoming = events.filter(event => new Date(event.date) >= today);
      const past = events.filter(event => new Date(event.date) < today);

      setUpcomingEvents(upcoming.sort((a, b) => new Date(a.date) - new Date(b.date)));
      setPastEvents(past.sort((a, b) => new Date(b.date) - new Date(a.date)));
    }
  }, [events]);

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
                <EventCard key={event._id} event={event} /> // Use EventCard component
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
                <EventCard key={event._id} event={event} /> // Use EventCard component
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
