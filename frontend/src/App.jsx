import React, { useEffect, useState } from 'react';
import ArcGISMap from './components/ArcGISMap';
import Navbar from "./components/Navbar";
import GeminiChatbot from "./components/GeminiChatbot";
import HeroSection from './components/HeroSection';
import FadeInWrapper from './components/FadeInWrapper';
import IntroSection from './components/IntroSection';
import ContaminantEffects from "./components/ContaminantEffects";
import MeetTheTeamSection from "./components/MeetTheTeamSection";
import DEISection from './components/DEISection';
import FooterSection from './components/FooterSection';

function App() {
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [isMapReady, setIsMapReady] = useState(false);
  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    const start = Date.now();
  
    if (isVideoReady && isMapReady) {
      const delay = 1200; // minimum 2s loader
      const timer = setTimeout(() => {
        setAppReady(true);
        const loader = document.getElementById("globalLoader");
        if (loader) {
          loader.classList.add("arc-reveal");
          setTimeout(() => loader.remove(), 5000); // kill the loader
        }
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isVideoReady, isMapReady]);

  return (
    <div className="app-container">
      <HeroSection onVideoReady={() => setIsVideoReady(true)} />
      <Navbar />
      <div className="bg-[#FDF1E6] [backface-visibility:hidden] [transform-style:preserve-3d]">
        
        <IntroSection />
        {/* <main id="contaminates" className="overflow-hidden p-0 m-0"> */}
        <ContaminantEffects />
        {/* </main> */}
        {/* <main id="about"> */}
        <MeetTheTeamSection />
        {/* </main> */}
        <DEISection />
      </div>
      <FadeInWrapper duration={300}>
      <main id="map" className="scroll-mt-[82px]">
        <ArcGISMap onMapReady={() => setIsMapReady(true)} />
        {/* <GeminiChatbot /> */}
      </main>
      </FadeInWrapper>
      <FooterSection />
    </div>
    
  );
}

export default App;
