"use client"; // Ensure this runs on the client-side

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Import from next/navigation
import styles from './newss.module.css';

export default function NewsDetail({ params }) {
  const router = useRouter(); // Router for navigation
  const { id } = params; // Extract the dynamic id from params
  const [news, setNews] = useState(null); // State for news data
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch the news data when the component mounts
  useEffect(() => {
    const fetchNewsById = async () => {
      try {
        const res = await fetch(`/api/news/${id}`); // Fetch news data based on ID
        if (!res.ok) {
          throw new Error('Failed to fetch news');
        }
        const newsData = await res.json();
        setNews(newsData); // Set the fetched news data
      } catch (error) {
        setError(error.message); // Set error state if fetching fails
      } finally {
        setIsLoading(false); // Stop loading
      }
    };

    if (id) {
      fetchNewsById(); // Fetch news when ID is available
    }
  }, [id]); // Dependency on id, fetch again if id changes

  if (isLoading) {
    return <p>Loading news...</p>; // Loading state
  }

  if (error) {
    return <p>Error: {error}</p>; // Display error message if fetching fails
  }

  if (!news) {
    return <p>No news found.</p>; // Display fallback if no news data
  }

  return (
    <div className={styles.newsDetailContainer}>
      <button onClick={() => router.back()} className={styles.goBackButton}>Go Back</button> {/* Back button */}
      
      <h1 className={styles.newsTitle}>{news.title}</h1>
      <p className={styles.newsDescription}>{news.description}</p>
      <img src={news.image} alt={news.title} className={styles.newsImage} />
      <div className={styles.newsBody}>
        <p>{news.body}</p> {/* Display the body field */}
      </div>
    </div>
  );
}
