import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";
import { motion, useTransform, useScroll } from 'framer-motion';
const Hero = () => {
  const parallaxRef = useRef(null);
  const { scrollY } = useScroll();

  // Movimiento vertical y escala del texto
  const y = useTransform(scrollY, [0, 500], [0, -100]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.8]);

  // Movimiento horizontal y opacidad de la imagen
  const ximg = useTransform(scrollY, [0, 500], [0, -200]); // Mueve la imagen hacia la izquierda
  const opacity = useTransform(scrollY, [0, 200], [1, 0]); // Ajusta la visibilidad de la imagen (opacidad)

  return (
    <Section
      className="sm:pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative " ref={parallaxRef}>
      <div className=" z-20 relative w-full  h-[100vh] flex justify-center   flex-col items-stard sm:px-20 " >
    <motion.h1 style={{ y, scale }} className="sm:text-[11rem] text-7xl bento  text-stard  leading-tight" >Nave</motion.h1>
    <p className="sm:w-1/3" >Bienvenidos a NAVE Productora, expertos en crear y organizar eventos excepcionales, brindando experiencias únicas que superan las expectativas de nuestros clientes.</p>
    <h1 className="  absolute right-6 text-slate-200/5 sm:text-slate-200 text-[6rem] bento p-0 text-stard  leading-none " >N<br/>a<br/>v<br/>e</h1>
  <div>
  </div>
  <motion.img style={{ x: ximg, opacity }} className="  right-10  absolute sm:h-[90%] bottom-0 " 
  src="https://res.cloudinary.com/dzqdjsrez/image/upload/v1723071840/file_11_yqega5.png" ></motion.img>
</div>

        


        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
