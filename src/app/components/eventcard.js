import styles from './eventcard.module.css';

const EventCard = ({ event }) => {
  const eventDate = new Date(event.date);
  const month = eventDate.toLocaleString('default', { month: 'short' });
  const day = eventDate.getDate();
  const year = eventDate.getFullYear();

  // Validate and prepare the link
  const validLink = event.link && (event.link.startsWith('http://') || event.link.startsWith('https://')) ? event.link : "#";

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
          <span> {`${month} ${day} @ ${event.time}`}</span>
        </div>

        <h2 className={styles.title}>{event.title}</h2>

        <p className={styles.location}>{event.location}</p>

        <p className={styles.description}>{event.description}</p>

        <a
          href={validLink}
          className={styles.registrationLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {event.link ? "Registration Link" : "No Registration Link"}
        </a>

        <p className={styles.bio}>{event.bio}</p>
      </div>
    </div>
  );
};

export default EventCard;
