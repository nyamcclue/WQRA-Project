import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Cards
const cards = [
  {
    title: 'Racial Equity',
    desc: 'We embrace differences and ensure everyone is heard.',
    image: '/icons/race.png',
    bg: '#c5450f',
  },
  {
    title: 'Gender Equality',
    desc: 'We stand for fairness and accessible opportunities for all.',
    image: '/icons/gender.png',
    bg: '#f78b30',
  },
  {
    title: 'Identity Support',
    desc: 'We provide environments where everyone feels they belong.',
    image: '/icons/inclusive.png',
    bg: '#ebc761',
  },
  {
    title: 'Disability Inclusion',
    desc: 'We work to improve accessibility for all.',
    image: '/icons/handicap.png',
    bg: '#b7d09c',
  },
  {
    title: 'Cultural Connection',
    desc: 'We understand and embrace diverse cultural backgrounds.',
    image: '/icons/group.png',
    bg: '#50a9a6',
  },
];


const gridPositions = [
  { x: '8%', y: '0%' },
  { x: '35%', y: '0%' },
  { x: '62%', y: '0%' },
  { x: '21.5%', y: '40%' },
  { x: '48.5%', y: '40%' },
];

const hexToRgba = (hex, alpha = 0.6) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const DEICard = ({ card, index, gridX, gridY, cardsVisible }) => {
  const glowColor = hexToRgba(card.bg, 0.6);
  const lightUpDelay = 2 + index * 1;
  const glowStart = lightUpDelay + 1.2;

  return (
    <motion.div
      className="absolute p-4 rounded-xl text-white flex flex-col justify-center items-center text-center overflow-hidden
      w-[38vw] h-[38vw] sm:w-45 sm:h-45 md:w-45 md:h-45 lg:w-55 lg:h-55"
      style={{
        backgroundColor: card.bg,
        left: gridX,
        top: gridY,
        zIndex: 10 + index,
      }}
      initial={{
        opacity: 0.3,
        boxShadow: '0 0 4px rgba(0,0,0,0.2)',
      }}
      animate={
        cardsVisible
          ? {
              opacity: 1,
              boxShadow: `0 0 20px 6px ${glowColor}`,
            }
          : {}
      }
      transition={{
        opacity: { delay: lightUpDelay, duration: 1.2, ease: 'easeInOut' },
        boxShadow: {
          delay: lightUpDelay,
          duration: 1.2,
          ease: 'easeInOut',
        },
      }}
    >
      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none"
        style={{ zIndex: -1 }}
        animate={{
          boxShadow: [
            `0 0 6px ${glowColor}`,
            `0 0 20px ${glowColor}`,
            `0 0 6px ${glowColor}`,
          ],
        }}
        transition={{
          delay: glowStart,
          duration: 3.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <img
        src={card.image}
        alt={card.title}
        className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
      />
      <h3 className="font-semibold text-sm sm:text-lg mt-3">{card.title}</h3>
      <p className="mt-1 text-xs sm:text-sm">{card.desc}</p>
    </motion.div>
  );
};

const DEISection = () => {
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: true, margin: '-100px' });
  const cardContainerRef = useRef(null);
  const cardsVisible = useInView(cardContainerRef, { once: true, margin: '-100px' });

  return (
    <>
      <section className="min-h-[95vh] py-50 flex flex-col lg:flex-row items-center justify-center bg-gradient-to-b from-[#a96743] via-[#803b2a] to-[#803b2a] px-4 sm:px-6 font-raleway">
        <div className="relative w-full max-w-[1600px] h-[150px] sm:h-[75px] mx-auto flex flex-col lg:flex-row items-start">
          {/* Text */}
          <motion.div
            ref={textRef}
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="w-full h-full lg:w-1/3 mb-10 lg:mb-0 px-4"
          >
            <motion.h2
              initial={{ textShadow: '0 0 4px rgba(255, 165, 0, 0.4)' }}
              animate={{
                textShadow: [
                  '0 0 6px rgba(255, 165, 0, 0.4)',
                  '0 0 20px rgba(255, 165, 0, 0.8)',
                  '0 0 6px rgba(255, 165, 0, 0.4)',
                ],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="text-orange-300 text-4xl sm:text-5xl leading-tight"
              style={{
                fontFamily: 'farnham-headline, serif',
                fontWeight: 700,
                fontStyle: 'italic',
                fontSize: 'clamp(2rem, 5vw, 70px)',
              }}
            >
              Welcoming Every Background, Every Story
            </motion.h2>

            <p className="text-orange-200 text-sm sm:text-base ">
              We foster a space where everyone belongs.
            </p>
          </motion.div>

          {/* Cards */}
          <div
            ref={cardContainerRef}
            className="relative w-full lg:w-2/3 h-[650px] sm:h-[700px]"
          >
            {cards.map((card, index) => (
              <DEICard
                key={index}
                index={index}
                card={card}
                gridX={gridPositions[index].x}
                gridY={gridPositions[index].y}
                cardsVisible={cardsVisible}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Jungle Bottom */}
     
      <div className="relative w-full h-[50px] bg-gradient-to-b from-[#803b2a]  to-[#440b0b] flex flex-col items-center justify-center px-6 py-32 z-0"></div>
  

  {/* Waves Section*/}
  <div className="relative w-full h-[360px] bg-gradient-to-b from-[#440b0b]  to-[#440b0b] overflow-hidden  rounded-b-4xl">
  <div className="relative w-full h-full overflow-hidden">

    {/* Wave 1: Back Wave */}
    <div className="absolute bottom-0 left-0 w-full h-full animate-waveSlow opacity-80 flex">
      {[...Array(2)].map((_, i) => (
        <svg
          key={`back-${i}`}
          className="min-w-full h-full flex-shrink-0"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path fill="#113846" d="M0,160 C 240,80 480,240 720,160 C 960,80 1200,240 1440,160 L1440,320 L0,320 Z" />
        </svg>
      ))}
    </div>

    {/* Wave 2: Middle Wave */}
    <div className="absolute bottom-0 left-0 w-full h-full animate-waveMedium opacity-60 flex">
      {[...Array(2)].map((_, i) => (
        <svg
          key={`mid-${i}`}
          className="min-w-full h-full flex-shrink-0"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path fill="#2b5e8f" d="M0,160 C 360,240 1080,80 1440,160 L1440,320 L0,320 Z" />
        </svg>
      ))}
    </div>

    {/* Wave 3: Front Wave */}
    <div className="absolute bottom-0 left-0 w-full h-full animate-waveFast opacity-90 flex">
      {[...Array(2)].map((_, i) => (
        <svg
          key={`front-${i}`}
          className="min-w-full h-full flex-shrink-0 "
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path fill="#547ca3" d="M0,200 C 180,80 360,320 720,200 C 1080,80 1260,320 1440,200 L1440,320 L0,320 Z" />
        </svg>
      ))}
    </div>
    
  </div>
  </div>



    </>
  );
};

export default DEISection;
