"use client";
import React, { useState, } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './cros.module.css'; // Import your CSS module

const images = [
  "/hh.jpeg",
   "/hh.jpeg",
 
];

// Custom arrow components
const PrevArrow = ({ className, onClick }) => (
  <div
    className={`${className} ${styles.prevArrow}`}
    onClick={onClick}
  />
);

const NextArrow = ({ className, onClick }) => (
  <div
    className={`${className} ${styles.nextArrow}`}
    onClick={onClick}
  />
);

export default function SimpleSlider() {
  const [settings, setSettings] = useState({
    dots: true, 
    infinite: true,
    focusOnSelect: true,
    slidesToShow: 1,
    slidesToScroll: 1,      
    autoplay: true,
    speed: 2000,

    pauseOnHover: true, 
    autoplaySpeed: 2000,
 
   initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

 
  return (
    <div className={styles.container}>
      <h2 className={styles.text}>Events</h2>
      <Slider {...settings} className={styles.slider}>
        {images.map((image, index) => (
          <div key={index} className={styles.slide}>
            <img src={image} alt={`Slide ${index + 1}`} className={styles.image} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
