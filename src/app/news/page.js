"use client"; // Use this directive to ensure the component runs on the client-side
import { useState, useEffect } from 'react';
import Link from 'next/link';
import ResponsiveAppBar from "../components/navbar";
import Footer from '../components/footer'; // Adjust the path as necessary
import Loading from '../components/loading'; // Import your Loading component
import styles from '../components/news.module.css'; // Import shared component styles
import pageStyles from './Newspage.module.css'; // Import page-specific styles

export default function NewsPage() {
  const [newsData, setNewsData] = useState([]); // Initialize state for news data
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch news data from the API
  useEffect(() => {
    setIsLoading(true); // Start loading when fetching data
    fetch('/api/news') // Replace with your actual API endpoint
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch news');
        }
        return res.json();
      })
      .then((data) => {
        setNewsData(data); // Set the fetched data to state
        setIsLoading(false); // Stop loading
      })
      .catch((error) => {
        setError(error.message); // Set error state if fetching fails
        setIsLoading(false); // Stop loading
      });
  }, []);

  if (isLoading) {
    return <Loading />; // Display loading component while fetching data
  }

  if (error) {
    return <p>Error: {error}</p>; // Display error message if fetching fails
  }

  return (
    <>
      <ResponsiveAppBar /> {/* Include your Navbar */}
      <div className={pageStyles.pageContainer}>
        <h1 className={pageStyles.pageTitle}>All News</h1>
        <div className={pageStyles.newsContainer}>
          <div className={pageStyles.newsGrid}>
            {newsData.map((news) => (
              <div key={news.id} className={styles.newsItem}>
                <img src={news.image} alt={news.title} className={styles.newsImage} />
                <div className={styles.newsContent}>
                  <p className={styles.newsMeta}>
                    <span className={styles.category} style={{ color: news.categoryColor }}>
                      {news.category}
                    </span>
                    {' • '}{news.timeAgo}
                  </p>
                  <h3 className={styles.newsTitle}>{news.title}</h3>
                  <p className={styles.newsDescription}>{news.description}</p>
                  <Link href={`/news/${news.id}`} className={styles.readMoreLink}>
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer /> {/* Include your Footer */}
    </>
  );
}
