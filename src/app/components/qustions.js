"use client"

// components/FAQSection.js
import React, { useState } from 'react';
import styles from './qus.module.css'; // Import your CSS module

const faqData = [
  {
    question: "Personal Development",
    answer: "IEEE opens the door to opportunities that will help you develop your professional identity by improving communication and leadership skills and thinking from a new perspective. In addition, you will make global connections with people who can help you along your targeted career path. At Unic IEEE Student Branch, we are always looking for enthusiastic students to get involved and lead the Branch into the future. To be involved in any roles, you must be a member first.",
  },
  {
    question: "Project Support",
    answer: "If you ever had an exciting project in mind and have the capacity to follow through with it, creating it with IEEE can be very advantageous, as branding may help the professionalism of your project, help with receiving funding, and receive help to advertise and recruit team members.",
  },
  {
    question: "Another Question",
    answer: "Here is another answer. This content can be tailored to fit your specific needs and can include more detailed information relevant to your audience.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleQuestionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle answer visibility
  };

  return (
    <section className={styles.faqSection}>
      <h2>FAQ Section</h2>
      <div className={styles.faqContainer}>
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}
            onClick={() => handleQuestionClick(index)}
          >
            <div className={styles.question}>
              {item.question}
            </div>
            {activeIndex === index && (
              <div className={styles.answer}>
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
