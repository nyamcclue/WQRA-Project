// src/components/HeroSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = ({ onVideoReady }) => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/waterHero.mp4"
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={onVideoReady}
      />

      {/* Overlay with text */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/55 flex items-center justify-center">
      <div className="flex flex-col items-center text-left space-y-3 px-10 max-w-7xl">
        <motion.h1
          className="text-white text-[6vw] font-boldonse drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 2.5}}
        >
          WQRA
        </motion.h1>

        <motion.p
          className="text-white ml-2.5 text-[1.45vw] font-light text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 3 }}
        >
        Water Quality Reporting and Analysis
        </motion.p>
      </div>
    </div>

      {/* Scroll-down anchor */}
      <motion.a
        //href="#main"
        //initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: [0, 1, 0], y: [-15, 0, -15] }}
        transition={{
          duration: 3,
          delay: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-[2.3vh] font"
      >
        Scroll Down
      </motion.a>

    </div>
  );
};

export default HeroSection;

// src/components/HeroSection.jsx
// import React from 'react';
// import { motion } from 'framer-motion';

// const HeroSection = ({ onVideoReady }) => {
//   return (
//     <div className="relative h-screen w-full overflow-hidden">
//       {/* Background video */}
//       <video
//         className="absolute top-0 left-0 w-full h-full object-cover"
//         src="/waterHero.mp4"
//         autoPlay
//         loop
//         muted
//         playsInline
//         onLoadedData={onVideoReady}
//       />

//       {/* Overlay with text */}
//       <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center">
//       <div className="flex flex-col items-center text-left space-y-7 px-10 max-w-7xl">
//         <motion.h1
//           className="text-white -ml-80 text-[8vw] font-boldonse drop-shadow-lg"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 2 }}
//         >
//           WQRA
//         </motion.h1>

//         <motion.p
//           className="text-white ml-125 text-lg font-light text-left"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 2, delay: 0.5 }}
//         >
//         The Water Quality Reporting and Analysis (WQRA) project is dedicated to protecting public health and the environment by making water quality information 
//         transparent and accessible. We empower residents, researchers, and policymakers to monitor, 
//         understand, and respond to water-related challenges across the United States. Our mission is to turn complex environmental data into a 
//         powerful public resource that promotes awareness, advances research, and informs policy to protect the water that sustains us all.
//         </motion.p>
//       </div>
//     </div>

//       {/* Scroll-down anchor */}
//       <a
//         href="#main"
//         className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-2xl animate-"
//       >
//         ↓
//       </a>
//     </div>
//   );
// };

// export default HeroSection;
