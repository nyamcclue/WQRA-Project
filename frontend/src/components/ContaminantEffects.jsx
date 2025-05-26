import React from 'react';
import { motion } from 'framer-motion';

{/* Contaminants Info Array*/}
const contaminants = [
  {
    name: 'Heavy Metals',
    icon: '/icons/weight.svg',
    effect: 'Can harm brain development, disrupt the nervous system—especially in children.',
    source: 'Leaching from corroded pipes, solder joints, and aging plumbing systems.',
  },
  {
    name: 'Phosphorus',
    icon: '/icons/beaker.svg',
    effect: 'Can disrupt digestion and nutrient balance; liver toxins in water.',
    source: 'Fertilizer runoff, detergents, and industrial discharge.',
  },
  {
    name: 'Nitrogen',
    icon: '/icons/matter.svg',
    effect: 'Reduces oxygen in blood, which is especially dangerous for infants ("blue baby syndrome").',
    source: 'Fertilizers, septic tanks, and livestock manure.',
  },
  {
    name: 'Biological Material',
    icon: '/icons/germ.svg',
    effect: 'May cause severe gastrointestinal illness, including diarrhea, vomiting, and kidney issues.',
    source: 'Fecal contamination from humans and animal waste.',
  },
  {
    name: 'Agricultural Runoff',
    icon: '/icons/rocks.svg',
    effect: 'Linked to hormone disruption, increased cancer risk, and weakened immune function.',
    source: 'Pesticides, herbicides, animal waste, and fertilizers washed from farms.',
  },
  {
    name: 'Industrial Runoff',
    icon: '/icons/warning.svg',
    effect: 'Linked to cancer, skin irritation, and nervous system damage.',
    source: 'Discharge from factories, manufacturing plants, and chemical processing sites.',
  },
];

{/* Animation for Cards*/}
const cardVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.08,
      duration: 0.4,
      ease: 'easeOut',
    },
  }),
};

const ContaminantEffects = () => {
  
  return (
    <>
    {/*Whats in your water? Section*/}
    <section className="bg-[#6bbcd5] overflow-hidden text-white py-16 px-4 font-['Sora'] flex justify-center">
      <div className="bg-[#FDF1E6] text-[#1A1A1A] rounded-3xl shadow-lg px-6 md:px-12 py-12 max-w-7xl w-full z-10">
        
        {/* Fade In Header on Scroll*/}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.15 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 font-['Unbounded'] text-[#0b1d3a]"
        >
          What’s In Your Water?
        </motion.h2>

        {/* Fade In Cards on Scroll*/}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center"
        >

        {/* Info Cards*/}
        {contaminants.map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            className="relative group bg-white h-44 w-full max-w-[160px] text-[#1A1A1A] rounded-xl overflow-hidden border border-[#DDC4B5] shadow-md transition-transform duration-300 hover:scale-105"
          >

          {/* Front of Cards*/}
          <div className="flex flex-col items-center justify-center h-full p-4 text-center font-['IBM Plex Mono'] z-10">
            <img src={item.icon} alt={item.name} className="w-10 h-10 mb-2" />
              <h3 className="text-sm font-semibold uppercase tracking-wide">
                {item.name}
              </h3>
          </div>

          {/* Back of Cards*/}
          <div className="absolute bottom-0 left-0 right-0 h-full bg-[#2B2D42]/95 text-[#B3C8D0] opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out p-4 text-[12px] flex flex-col justify-center items-center text-center backdrop-blur-sm rounded-xl space-y-1 leading-tight">
            <div className="text-white text-xs leading-tight space-y-1">
              <p className="text-[#E5D9C5] font-bold uppercase text-[11px] tracking-wide">Source</p>
              <p className="italic text-[11px] text-[#cfd8dc]">{item.source}</p>
              <p className="text-[#E5D9C5] font-bold uppercase text-[11px] tracking-wide pt-2">Effect</p>
              <p className="text-[11px]">{item.effect}</p>
            </div>
          </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section> 


{/* Cloud Bottom Positioned at End of Section */}
  <div className="relative w-full overflow-visible z-10 bg-gradient-to-b from-[#aed1d7] via-[#aed1d7] to-[#fad9b6]">
    {/* Cloud Divider */}
    <img
      src="/clouds.png"
      alt="Cloud divider"
      className=" bottom-0 left-0 w-full h-auto object-cover pointer-events-none z-20"
    />

    {/* Raindrops */}
    <img
      src="/clouds.png"
      alt="Cloud divider"
      className="absolute bottom-0 left-0 w-full h-auto object-cover pointer-events-none"
    />

    {/* Raindrop Image Animation */}
    {[...Array(80)].map((_, i) => {
      const left = Math.random() * 100;
      const size = 4 + Math.random() * 20; // raindrop size
      const delay = Math.random() * -3;
      const blur = Math.random() * 2;
      const opacity = 0.3 + Math.random() * 0.4;
      const speedFactor = 4.5 - (size / 26); 
      const duration = 0.4 + Math.random() * 0.8;

      return (
        <img
          key={i}
          src="/drop.png" 
          alt="raindrop"
          className="absolute top-50"
          style={{
            left: `${left}%`,
            width: `${size}px`,
            height: `${size}px`,
            animation: `fall ${duration}s ease-in infinite`,
            animationDelay: `${delay}s`,
            filter: `blur(${blur}px)`,
            opacity: opacity,
          }}
        />
      );
    })}
  </div>
   </> 
  );
};

export default ContaminantEffects;
