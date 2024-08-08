import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Section from './Section';

const videos = [
  'https://res.cloudinary.com/dzqdjsrez/video/upload/v1723087572/Pasthor_mmzwxr.mp4',
  'https://res.cloudinary.com/dzqdjsrez/video/upload/v1723087441/GMF_showmatch_Frankkaster_vs_Sony_o4f6a8.mp4',
  'https://res.cloudinary.com/dzqdjsrez/video/upload/v1723087490/GMF_dia_1_zague2.mp4',
  'https://res.cloudinary.com/dzqdjsrez/video/upload/v1723087656/Wolf_Lukitas_l4etoj.mp4' // Añade los URLs de tus videos aquí
];

const VideoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef([]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            video.play();
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 } // Ajusta este valor si quieres que los videos se reproduzcan antes o después de estar completamente visibles
    );

    videoRefs.current.forEach((video) => {
      if (video) {
        observer.observe(video);
      }
    });

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) {
          observer.unobserve(video);
        }
      });
    };
  }, []);

  return (
    <Section className="relative w-full h-full overflow-hidden">
      <motion.div
        className="flex"
        initial={{ x: '100%' }}
        animate={{ x: `-${currentIndex * 100}%` }}
        transition={{ duration: 0.5 }}
      >
        {videos.map((video, index) => (
          <div key={index} className="flex-shrink-0 w-full h-full flex justify-center items-center">
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={video}
              controls
              className="w-3/4 h-[500px] object-cover border border-n-1/10 rounded-3xl"
            />
          </div>
        ))}
      </motion.div>

      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 rounded-sm hover:text-orange-500 text-white p-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 4.5l-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 hover:text-orange-500 rounded-sm text-white p-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 4.5l7.5 7.5-7.5 7.5m6-15l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </Section>
  );
};

export default VideoCarousel;
