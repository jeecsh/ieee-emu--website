"use client";
import React, { useState, useEffect, Suspense, lazy } from 'react';
import styles from './slider.module.css';
import { useTexture } from '@react-three/drei';

// Lazy load the Gallery components
const Gallery = lazy(() => import('react-gallery-3d').then(module => ({ default: module.Gallery })));
const GalleryScene = lazy(() => import('react-gallery-3d').then(module => ({ default: module.GalleryScene })));
const ImageItem = lazy(() => import('react-gallery-3d').then(module => ({ default: module.ImageItem })));
``
const galleryImages = [
  "/hd.svg",
  "/hd.svg",
  "/hd.svg",
  "/hd.svg",
  "/hd.svg",
  "/hd.svg",
];

const texts = [
  "Innovate with Purpose",
  "Learn with Passion",
  "Connect with Peers",
  "Fuel Your Curiosity",
];

function MyGallery() {
  const textures = useTexture(galleryImages);

  return (
    <Gallery>
      {textures.map((texture, index) => (
        <ImageItem key={index} texture={texture} />
      ))}
    </Gallery>
  );
}

export default function TextAnimation() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 4000); // Change text every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.mainContent}>
        <Suspense fallback={<div>Loading...</div>}>
          <GalleryScene
            orbitControls={{
              autoRotate: true,
              enableZoom: false,
              autoRotateSpeed: 10,
            }}
            environment={{
              preset: "city",
            }}
            fog={{
              color: "black",
            }}
            camera={{
              position: [55, 0, 150],
              fov: 50,
            }}
            ground={{
              reflectorMaterial: {
                metalness: 1,
                roughness: 0.9,
                mirror: 1,
                resolution: 2048,
              },
            }}
          >
            <MyGallery />
          </GalleryScene>
        </Suspense>
        <div className={styles.textWrapper}>
          {texts.map((text, index) => (
            <div
              key={index}
              className={`${styles.text} ${
                index === currentIndex ? styles.fadeIn : styles.fadeOut
              }`}
            >
              {text}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
