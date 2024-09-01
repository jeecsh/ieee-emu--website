import Link from 'next/link'; // Import Link component from Next.js
import styles from './news.module.css';

// News data related to IEEE
  const newsData = [
    {
      id: 1,
      category: 'IEEE News',
      timeAgo: '3 hours ago',
      title: 'IEEE Announces New AI Research Initiative',
      description: 'IEEE is launching a new research initiative focused on advancements in artificial intelligence and machine learning. This initiative aims to foster innovation and collaboration in the field.',
      image: '/h1.jpeg', // Update with your image paths
      categoryColor: '#0056b3', // IEEE Blue
      readTime: '5 min read',
    },
  {
    id: 2,
    category: 'IEEE Events',
    timeAgo: '12 hours ago',
    title: 'Upcoming IEEE Conference on Robotics',
    description: 'The IEEE Robotics Conference is set to take place next month, featuring keynote speakers from top robotics companies and research institutions.',
    image: '/h2.jpeg',
    categoryColor: '#0056b3', // IEEE Blue
    readTime: '6 min read',
  },
  {
    id: 3,
    category: 'IEEE Achievements',
    timeAgo: 'April 17, 2024',
    title: 'IEEE Members Win Prestigious Engineering Award',
    description: 'Several IEEE members have been honored with a prestigious engineering award for their groundbreaking work in sustainable technology.',
    image: '/h3.jpeg',
    categoryColor: '#0056b3', // IEEE Blue
    readTime: '7 min read',
  },
  {
    id: 4,
    category: 'IEEE Innovations',
    timeAgo: 'April 15, 2024',
    title: 'New IEEE Standard for Quantum Computing',
    description: 'IEEE has introduced a new standard for quantum computing, setting guidelines for the development and implementation of quantum technologies.',
    image: '/h4.jpeg',
    categoryColor: '#0056b3', // IEEE Blue
    readTime: '8 min read',
  },
  {
    id: 5,
    category: 'IEEE Achievements',
    timeAgo: 'April 17, 2024',
    title: 'IEEE Members Win Prestigious Engineering Award',
    description: 'Several IEEE members have been honored with a prestigious engineering award for their groundbreaking work in sustainable technology.',
    image: '/h3.jpeg',
    categoryColor: '#0056b3', // IEEE Blue
    readTime: '7 min read',
  },
  {
    id: 6,
    category: 'IEEE Innovations',
    timeAgo: 'April 15, 2024',
    title: 'New IEEE Standard for Quantum Computing',
    description: 'IEEE has introduced a new standard for quantum computing, setting guidelines for the development and implementation of quantum technologies.',
    image: '/h4.jpeg',
    categoryColor: '#0056b3', // IEEE Blue
    readTime: '8 min read',
  }
  
];

export default function LatestNews() {
  // Slice the array to ensure only the latest 4 news items are displayed
  const latestNews = newsData.slice(0, 4);

  return (
    <div className={styles.newsContainer} id="news">
      <div className={styles.header}>
        <h2 className={styles.h2}>See Our Latest News</h2>
        <Link href="/news" className={styles.seeAllButton}>
          See all →
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
  