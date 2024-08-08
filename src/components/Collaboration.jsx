import React, { useState } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import { brainwaveSymbol, check } from "../assets";
import { collabApps, collabContent, collabText } from "../constants";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";

const Collaboration = () => {
  const { scrollYProgress } = useScroll();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Definir las animaciones
  const x1 = useTransform(scrollYProgress, [0, 0.5], [400, 0]);
  const x2 = useTransform(scrollYProgress, [0, 0.5], [-400, 0]);
  const x3 = useTransform(scrollYProgress, [0, 0.5], [-200, 200]);
  
  const opacityTitle = useTransform(scrollYProgress, [0, 0.3], [0, 2]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Section crosses>
      <div className="w-full h-[100vh] relative">
        <div className="w-full h-full flex justify-center items-center">
          <motion.img
            className="sm:h-[80%] relative filter brightness-50"
            src="https://res.cloudinary.com/dzqdjsrez/image/upload/v1723072098/file_8_m3gsmb.png"
            style={{ x: x3, opacity: 0.7 }} // Agrega la animación para la imagen derecha
          />
          <div className="w-full h-full absolute flex justify-center items-center flex-col">
            <motion.h1
              className="text-[11rem] bento text-stard leading-tight"
              style={{ opacity: opacityTitle }}
            >
              Nave
            </motion.h1>
            <button
              className="mb-10 flex justify-center items-center text-white w-20 h-20 bg-white/10 rounded-full border border-white cursor-pointer hover:text-orange-500"
              onClick={openModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                />
              </svg>
            </button>
            <motion.p
              className="text-center"
              style={{ opacity: opacityText }}
            >
              Cambia la manera de hacer las cosas
            </motion.p>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-gray-900/20 p-4  rounded-lg relative">
              <button
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                onClick={closeModal}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <h2 className="text-xl font-semibold mb-4"></h2>
              <iframe width="560" height="315" className=' sm:w-[900px] sm:h-[500px]   ' src="https://www.youtube.com/embed/38vZLQevl2s?si=0wfBg535GAI7YIQa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              {/* <Button onClick={closeModal}>Cerrar</Button> */}
            </div>
          </div>
        )}
      </div>
    </Section>
  );
};

export default Collaboration;
