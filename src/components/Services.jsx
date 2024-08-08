"use client"
import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

import Generating from "./Generating";
import { motion, useTransform, useScroll } from 'framer-motion';

const Services = () => {
  const { scrollY } = useScroll();

  // Movimiento vertical y escala del texto
  const y = useTransform(scrollY, [0, 500], [0, -100]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.8]);

  // Movimiento horizontal y opacidad de la imagen
  const ximg = useTransform(scrollY, [0, 500], [0, -200]); // Mueve la imagen hacia la izquierda
  const opacity = useTransform(scrollY, [0, 200], [1, 0]); // Ajusta la visibilidad de la imagen (opacidad)

  return (
    <Section id="pricing">
      <div className="container">
        <Heading
          title="Descubre Nuestro Talento"
          text="En NAVE Productora, nos enorgullece colaborar con una selecta red de influencers y talentos excepcionales que elevan cada evento a nuevas alturas."
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute  top-20 right-[300px] w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <motion.img
                className="w-full sm:visible invisible h-full object-cover md:object-right"
                width={800}
                alt="Smartest AI"
                height={730}
                style={{ y, scale }}
                src="https://res.cloudinary.com/dzqdjsrez/image/upload/v1723071840/file_11_yqega5.png"
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <p className="body-2 mb-[3rem] text-n-3">
              Da un vistazo a lo que NAVE Productora es capaz de lograr y descubre cómo podemos hacer realidad tu visión con nuestro equipo de expertos y talentosos colaboradores.
              </p>
              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" />
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src='https://res.cloudinary.com/dzqdjsrez/image/upload/v1723113725/Lo_que_se_viene_este_2022_gracias_a_lemoncash.app_no_tiene_sentido.Gracias_por_hacer_esto_posible_mazza.ph_pugvf6.jpg'
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Frankkaster</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  
                </p>
              </div>

            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Influencers con los que Trabajamos</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                Trabajamos con influencers y talentos de renombre que aportan un valor significativo a cada evento. 
                </p>

                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`rounded-2xl flex items-center justify-center ${
                        index === 2
                          ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                            : ""
                        }
                      >
                        <img src={item} width={24} height={24} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src='https://res.cloudinary.com/dzqdjsrez/image/upload/v1718633088/chrome-capture-2024-6-17_1_ldbi2f.png'
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Scary robot"
                />

               
                <VideoBar />
              </div>
            </div>
            
            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[26rem]">
              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src='https://res.cloudinary.com/dzqdjsrez/image/upload/v1718633332/chrome-capture-2024-6-17_2_lxcvp3.png'
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Scary robot"
                />
                <VideoBar />
              </div>
              <h4 className="h4 mb-4">Rulombotv</h4>
              <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`rounded-2xl flex items-center justify-center ${
                        index === 2
                          ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                            : ""
                        }
                      >
                        <img src={item} width={24} height={24} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
            </div>

            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src='https://res.cloudinary.com/dzqdjsrez/image/upload/v1723113857/dqat3xbn1i4rgjyncnpb.jpg'
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">GSony</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                </p>
              </div>

            </div>

            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src='https://res.cloudinary.com/dzqdjsrez/image/upload/v1723114005/Wolf_xx6lah.jpg'
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Wolft</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  
                </p>
              </div>

            </div>

          </div>
          



          

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
