import { motion, useTransform, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
import Section from "./Section";

const Scrollh = () => {
  const { scrollYProgress } = useScroll();
  const [isMobile, setIsMobile] = useState(false);

  // Detectar si es un dispositivo móvil
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 640px)');
    setIsMobile(mediaQuery.matches);

    const handleResize = () => setIsMobile(mediaQuery.matches);
    mediaQuery.addListener(handleResize);
    return () => mediaQuery.removeListener(handleResize);
  }, []);

  // Definir las animaciones basadas en el tamaño de la pantalla
  const xValues = isMobile ? [
    useTransform(scrollYProgress, [0, 0.5], [50, 0]),
    useTransform(scrollYProgress, [0, 0.5], [-50, 0]),
    useTransform(scrollYProgress, [0, 0.5], [50, -100]),
    useTransform(scrollYProgress, [0, 0.5], [-50, 100]),
    useTransform(scrollYProgress, [0, 0.5], [100, -150]),
    useTransform(scrollYProgress, [0, 0.5], [-100, 150])
  ] : [
    useTransform(scrollYProgress, [0, 0.5], [400, 0]),
    useTransform(scrollYProgress, [0, 0.5], [-400, 0]),
    useTransform(scrollYProgress, [0, 0.5], [200, -200]),
    useTransform(scrollYProgress, [0, 0.5], [-200, 200]),
    useTransform(scrollYProgress, [0, 0.5], [300, -300]),
    useTransform(scrollYProgress, [0, 0.5], [-300, 300])
  ];

  const opacityTitle = useTransform(scrollYProgress, [0, 0.3], [0, 2]);
  const opacityText = useTransform(scrollYProgress, [0, 0], [0, 1]);

  const cards = [
    {
      title: "Consulta Inicial",
      text: "Entendemos tus necesidades, objetivos y visión para garantizar que tu evento sea un éxito rotundo.",
      imgSrc: "https://res.cloudinary.com/dzqdjsrez/image/upload/v1723071450/file_10_ctog6s.png",
    },
    {
      title: "Planificacion",
      text: "Creamos planes detallados y conceptos creativos que reflejen tu visión, ajustados a tu presupuesto.",
      imgSrc: "https://res.cloudinary.com/dzqdjsrez/image/upload/v1723066221/file_7_fu4q8s.png",
    },
    {
      title: "Produccion y Coordinacion",
      text: "Gestionamos todas las actividades logísticas y de recursos humanos para asegurar una ejecución sin problemas.",
      imgSrc: "https://res.cloudinary.com/dzqdjsrez/image/upload/v1723071098/file_9_gizbgv.png",
    },
    {
      title: "Gestion de Talento e Influencers",
      text: "Integramos talentos e influencers para agregar valor y coherencia con los objetivos del evento.",
      imgSrc: "https://res.cloudinary.com/dzqdjsrez/image/upload/v1723066221/file_7_fu4q8s.png",
    },
    {
      title: "Operaciones y Ejecucion",
      text: "Supervisamos todas las operaciones durante el evento para asegurar que todo se desarrolle sin contratiempos.",
      imgSrc: "https://res.cloudinary.com/dzqdjsrez/image/upload/v1723071098/file_9_gizbgv.png",
    },
    {
      title: "Soporte Post-Evento",
      text: "Evaluamos el evento, ofrecemos asistencia post-evento y cerramos todos los aspectos administrativos con transparencia.",
      imgSrc: "https://res.cloudinary.com/dzqdjsrez/image/upload/v1723084965/file_12_ou7tfh.png",
    },
  ];

  return (
    <Section crosses>
      <div className="sm:w-full h-fit relative">
        <div className="sm:w-full h-full flex flex-col justify-center items-center">
          {cards.map((card, index) => (
            <motion.div 
              key={index}
              className='hover:bg-orange-500 sm:w-1/2 relative mb-5 sm:p-8 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 h-fit cursor-pointer'
              style={{ x: xValues[index % xValues.length], opacity: 0.7 }}
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0,0,0,0.2)" }}
            >
              <motion.img
                className="h-[90%] absolute filter brightness-50"
                src={card.imgSrc}
                style={{ x: xValues[index % xValues.length], opacity: 0.7 }}
                alt={card.title}
              />
              <div className="w-full h-full relative flex justify-center items-center flex-col">
                <motion.h1
                  className="text-4xl bento text-stard leading-tight"
                  style={{ opacity: opacityTitle }}
                >
                  {card.title}
                </motion.h1>
                <motion.p
                  className="text-center text-white"
                  style={{ opacity: opacityText }}
                >
                  {card.text}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Scrollh;
