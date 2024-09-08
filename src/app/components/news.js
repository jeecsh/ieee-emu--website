import Link from 'next/link';
import styles from './news.module.css';

// Home page component displaying latest news
export default function LatestNews({ newsData }) {
    // Fallback in case newsData is undefined or not an array
    if (!newsData || !Array.isArray(newsData)) {
      return <p>No news available</p>; // You can add a loading state or error message here
    }
  // Slice the array to ensure only the latest 4 news items are displayed
  const latestNews = newsData.slice(0, 4);

  return (
    <div className={styles.newsContainer} id="news">
      <div className={styles.header}>
        <h2 className={styles.h2}>See Our Latest News</h2>
        <Link href="/news" className={styles.seeAllButton}>
          See all
        </Link>
      </div>
      <div className={styles.newsGrid}>
        {latestNews.map((news) => (
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Fetch data from API at build time for static generation (SSG)
export async function getStaticProps() {
  // Replace with your actual API endpoint
  const res = await fetch('/api/news');
  const newsData = await res.json();

  return {
    props: {
      newsData,
    },
    revalidate: 60, // Revalidate the data every 60 seconds
  };
}
