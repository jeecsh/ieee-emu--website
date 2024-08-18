import styles from './eventcard.module.css';

const EventCard = ({ event }) => {  // Make sure event is destructured here
  const eventDate = new Date(event.date);
  const month = eventDate.toLocaleString('default', { month: 'short' });
  const day = eventDate.getDate();
  const year = eventDate.getFullYear();

  return (
    <div className={styles.eventCard}>
      <div className={styles.dateSection}>
        <span className={styles.month}>{month}</span>
        <span className={styles.day}>{day}</span>
        <span className={styles.year}>{year}</span>
      </div>

      <div className={styles.eventDetails}>
        <div className={styles.featured}>
          <span>🌟 Featured</span>
          <span> {`${month} ${day} @ ${event.time}`}</span> {/* Display time */}
        </div>

        <h2 className={styles.title}>{event.title}</h2>

        <p className={styles.location}>{event.location}</p> {/* Display location */}

        <p className={styles.description}>{event.description}</p>

        <a
          href="https://events.vtools.ieee.org/m/423971"
          className={styles.registrationLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Registration Link
        </a>

        <p className={styles.bio}>{event.bio}</p> {/* Display bio */}
      </div>
    </div>
  );
};

export default EventCard;
