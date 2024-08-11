"use client";

// components/Promotion.js
import React, { useState, useEffect } from 'react';
import styles from './pormotion.module.css'; // Import your CSS module

const questionsAndAnswers = [
  {
    question: "Why Join IEEE?",
    answer: "Access to cutting-edge information, networking opportunities, career enhancement, and many other exclusive member benefits are the key values of IEEE membership.",
  },
  {
    question: "Why Join EMU IEEE Student Branch?",
    answer: "Student Branch events IEEE student members will receive priority and discounts to participate in the events organized by our branch. Further, we try to tailor our events based on members’ interest.",
  }
];
const additionalQuestionsAndAnswers = [
    {
      question: "Personal Development",
      answer: "IEEE opens the door to opportunities that will help you develop your professional identity by improving communication and leadership skills and thinking from a new perspective. In addition, you will make global connections with people who can help you along your targeted career path. At Unic IEEE Student Branch, we are always looking for enthusiastic students to get involved and lead the Branch into the future. To be involved in any roles, you must be a member first.",
    },
    {
      question: "Project Support",
      answer: "If you ever had an exciting project in mind and have the capacity to follow through with it, creating it with IEEE can be very advantageous, as branding may help the professionalism of your project, help with receiving funding, and receive help to advertise and recruit team members.",
    },
  ];

export default function Promotion() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    const questionDuration = 3000; // Duration for typing question
    const answerDuration = 2000; // Duration for fading in the answer
    const typingSpeed = 100; // Speed of typing effect

    const typeQuestion = () => {
      const question = questionsAndAnswers[currentIndex].question;
      let displayedText = '';
      let index = 0;
      
      const typeInterval = setInterval(() => {
        if (index < question.length) {
          displayedText += question[index];
          index += 1;
          document.getElementById('question').innerText = displayedText;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => setShowAnswer(true), questionDuration);
        }
      }, typingSpeed);
    };

    typeQuestion();
    const interval = setInterval(() => {
      setShowAnswer(false);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % questionsAndAnswers.length);
      typeQuestion();
    }, questionDuration + answerDuration + 5000); // Adjust timing for next question

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [currentIndex]);

  return (
    <section className={styles.promotion}>
     
      <div className={styles.qnaContainer}>
        <div id="question" className={styles.question}></div>
        {showAnswer && (
          <div className={styles.answer}>
            {questionsAndAnswers[currentIndex].answer}
          </div>
        )}
      </div>
    </section>
  );
}
