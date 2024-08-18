"use client";
import React, { useState, useEffect } from 'react';
import Counter from './counter'; // Import the Counter component
import styles from './pormotion.module.css'; // Import your CSS module

const questionsAndAnswers = [
  {
    question: "Why you should Join IEEE?",
    answers: [
      "Access to cutting-edge information, networking opportunities, career enhancement, and many other exclusive member benefits are the key values of IEEE membership.",
      "Joining IEEE offers numerous networking opportunities with industry professionals and access to exclusive resources that can help advance your career .",
      "Being a part of IEEE allows you to stay updated with the latest technological advancements, connect with like-minded individuals, and gain leadership opportunities."
    ]
  }
];

export default function Promotion() {
  const [displayQuestion, setDisplayQuestion] = useState("");
  const [currentAnswerIndex, setCurrentAnswerIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    const typingSpeed = 100; // Speed of typing effect
    const question = questionsAndAnswers[0].question;
    let index = 0;
    let typeInterval;
    let answerInterval;

    const typeQuestion = () => {
      let displayedText = '';
      index = 0; // Reset index for each typing effect

      typeInterval = setInterval(() => {
        if (index < question.length) {
          displayedText += question[index];
          index += 1;
          setDisplayQuestion(displayedText); // Update question display
        } else {
          clearInterval(typeInterval);
          setShowAnswer(true);

          // Start cycling through answers
          answerInterval = setInterval(() => {
            setCurrentAnswerIndex((prevIndex) => (prevIndex + 1) % questionsAndAnswers[0].answers.length);
          }, 3000); // Change answer every 8 seconds to match the CSS timing
        }
      }, typingSpeed);
    };

    typeQuestion();

    // Clear intervals on component unmount
    return () => {
      if (typeInterval) clearInterval(typeInterval);
      if (answerInterval) clearInterval(answerInterval);
    };
  }, []);

  return (
    <section className={styles.promotion}>
      <div className={styles.qnaContainer}>
        <div className={styles.question}>{displayQuestion}</div>
        {showAnswer && (
          <div className={styles.answer}>
            {questionsAndAnswers[0].answers[currentAnswerIndex]}
          </div>
        )}
      </div>
      <div className={styles.counterRow}>
        <Counter
          over="Over"
          targetNumber={3500}
          label="Student Branches"
          duration={2000} // Adjust duration for smooth animation
        />
        <Counter
          over="Over"
          targetNumber={400000}
          label="Students"
          duration={2000} // Adjust duration for smooth animation
        />
        <Counter
          over="Total Of"
          targetNumber={160}
          label="Countries"
          duration={2000} // Adjust duration for smooth animation
        />
      </div>
    </section>
  );
}
