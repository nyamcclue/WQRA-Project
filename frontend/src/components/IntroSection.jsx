import React from 'react';
import FadeInWrapper from './FadeInWrapper';

{/* Content Array*/}
const content = [
  {
    title:"Connecting Communities to Water Quality",
    image:"/landscape.jpg",
    text:"The Water Quality Reporting and Analysis (WQRA) project is dedicated to protecting public health and the environment by making information about our water systems transparent, accessible, and actionable. We empower residents, researchers, and policymakers to monitor, understand, and respond to water-related challenges across the United States. Our mission is to transform complex environmental data into a powerful public resource that raises awareness, advances research, and shapes policy to protect the water that sustains us all.",
    reverse: false,
  },
  {
    title: "Making Water Quality Transparent",
    video: "/glass1.mp4",
    text: `WQRA transforms EPA water quality data into a powerful, interactive map that visualizes contamination risks across public water systems nationwide. The website allows users to search by location, explore specific contaminants, and view historical trends in water quality. With easy-to-use filters and clear visualizations, WQRA helps residents, researchers, and public officials identify potential threats, understand local water safety, and make informed decisions. Whether you're concerned about lead levels in your neighborhood or researching broader environmental patterns, WQRA turns complex data into actionable insight.`,
    reverse: true,
  },
  {
    title: "Understanding Water Contaminants",
    image: "/oil.jpg", // Replace with real path
    text:  `Contaminants in drinking water are measured in milligrams per liter (mg/L), which reflects the amount of a substance present in a given volume of water. These measurements are compared to federally established Maximum Contaminant Levels (MCLs)—the highest permissible limits for specific substances like lead, nitrates, and phosphates. MCLs help ensure that drinking water remains within safe and regulated health standards.`,
    reverse: false,
  },
];



const IntroSections = () => {

  return (
  <>
  {/* Bubble Array */}
  <div className="relative w-full overflow-hidden">
  <div className="absolute inset-0 pointer-events-none z-10">
    {[...Array(50)].map((_, i) => {
      const size = 10 + Math.random() * 20;
      const hue = 180 + Math.random() * 60;
      const alpha = 0.1 + Math.random() * 0.2;

      return (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: `-${size}px`,
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: `hsla(${hue}, 100%, 85%, ${alpha})`,
            animation: `bubbleFloat ${10 + Math.random() * 6}s ease-in infinite`,
            animationDelay: `${Math.random() * 10}s`,
            filter: `blur(${blur})`,
            willChange: 'transform',
          }}
          
        />
      );
    })}
  </div>



  {/* "Water" Section with waves at end */}
  <div className="relative w-full h-[1200px] bg-gradient-to-b from-[#000b15] via-[#092238] to-[#20314b] flex flex-col items-center justify-center px-6 py-32 z-0"></div>
  </div>

  {/* Waves Section*/}
  <div className="relative w-full h-[300px] bg-[#d6b588] overflow-hidden">
  <div className="relative w-full h-full overflow-hidden">

    {/* Wave 1: Back Wave */}
    <div className="absolute bottom-0 left-0 w-full h-full animate-waveSlow opacity-80 flex">
      {[...Array(2)].map((_, i) => (
        <svg
          key={`back-${i}`}
          className="min-w-full h-full flex-shrink-0 rotate-180"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path fill="#405069" d="M0,160 C 240,80 480,240 720,160 C 960,80 1200,240 1440,160 L1440,320 L0,320 Z" />
        </svg>
      ))}
    </div>

    {/* Wave 2: Middle Wave */}
    <div className="absolute bottom-0 left-0 w-full h-full animate-waveMedium opacity-60 flex">
      {[...Array(2)].map((_, i) => (
        <svg
          key={`mid-${i}`}
          className="min-w-full h-full flex-shrink-0 rotate-180"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path fill="#6a8bab" d="M0,160 C 360,240 1080,80 1440,160 L1440,320 L0,320 Z" />
        </svg>
      ))}
    </div>

    {/* Wave 3: Front Wave */}
    <div className="absolute bottom-0 left-0 w-full h-full animate-waveFast opacity-90 flex">
      {[...Array(2)].map((_, i) => (
        <svg
          key={`front-${i}`}
          className="min-w-full h-full flex-shrink-0 rotate-180"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path fill="#192943" d="M0,200 C 180,80 360,320 720,200 C 1080,80 1260,320 1440,200 L1440,320 L0,320 Z" />
        </svg>
      ))}
    </div>

  </div>
</div>




    {/* About Section */}
  <div className="bg-gradient-to-b from-[#d6b588] via-[#ddcfbc] to-[#6bbcd5] relative z-40 w-full min-h-screen py-24 px-6 md:px-20 space-y-28">
    {content.map((section, idx) => (
      <FadeInWrapper key={idx}>
      <div
        className={`flex flex-col md:flex-row items-center ${
          section.reverse ? 'md:flex-row-reverse' : ''
        } gap-16`}
      >


        {/* Media: Video or Image */}
      <div className="w-full md:w-2/3">
        {section.video ? (
          <video
            src={section.video}
            autoPlay
            muted
            loop
            className="w-full h-full max-h-[500px] object-cover rounded-[2.5rem] shadow-xl"
          />
        ) : (
          <img
            src={section.image}
            alt="Illustration"
            className="w-full h-full max-h-[500px] object-cover rounded-[2.5rem] shadow-xl"
          />
        )}
      </div>


        {/* Text Boxes */}
      <div className="w-full md:w-1/3 max-w-sm text-[#4b240a]">
        <h1 className="text-4xl md:text-5xl leading-tight mb-6"
          style={{fontFamily: "calendula, sans serif",}}
        >
          {section.title}
        </h1>
        <p className="text-xl leading-relaxed font-light">
          {section.text}
        </p>
      </div>
    </div>
    </FadeInWrapper>
  ))}
</div>
    </>
  );
};
  
  export default IntroSections;