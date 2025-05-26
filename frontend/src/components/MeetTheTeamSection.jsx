import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';


{/* Team Members Array */}
const teamMembers = [
  {
    name: 'Caleigh Meche',
    title: 'Full-Stack Developer',
    image: '/photos/caleigh.png',
    position: 'top-[13%] left-[15%]',
    color: 'bg-blue-300',
  },
  {
    name: 'Jacob Bennet',
    title: 'Database Architect',
    image: '/photos/jacob.png',
    position: 'top-[40%] left-[5%]',
    color: 'bg-teal-300',
  },
  {
    name: 'Nya McClue',
    title: 'UI/UX Designer',
    image: '/photos/nya.png',
    position: 'top-[15%] left-[35%]',
    color: 'bg-pink-300',
  },
  {
    name: 'Mark Gang',
    title: 'Database Architect',
    image: '/photos/mark.png',
    position: 'top-[60%] left-[15%]',
    color: 'bg-indigo-300',
  },
  {
    name: 'Tristan Brasseaux',
    title: 'Backend Developer',
    image: '/photos/tristan.png',
    position: 'top-[43%] left-[28%]',
    color: 'bg-white',
  },
];



const MeetTheTeam = () => {
  return (
    <>

    {/* Meet The Team Section */}
    <section className="relative w-full min-h-screen bg-gradient-to-b from-[#fad9b6] via-[#dda384] to-[#a96743] overflow-hidden px-4 sm:px-6 py-20">

      {/* Floating Header Faded In*/}
      <motion.div
        className="absolute top-[10%] right-4 sm:right-[8%] text-right max-w-[90%] sm:max-w-[450px] z-30"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        <h2
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight text-[#471c1c] drop-shadow-md"
          style={{
            fontFamily: 'june-expt-variable, sans-serif',
            fontVariationSettings: '"STYL" 50',
          }}
        >
          The People Behind<br /> The Map
        </h2>
        <p className="text-[#310b0b] mt-2 sm:mt-4 text-sm sm:text-base">
          Depth. Design. Dev. Delivered.
        </p>
      </motion.div>

      {/* Team Members */}
      {teamMembers.map((member, index) => {
        const delay = `${index * 200}ms`;
        const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
        const controls = useAnimation();

        useEffect(() => {
          if (inView) controls.start('visible');
        }, [inView, controls]);

        return (
        <motion.div
          ref={ref}
          key={index}
          className={`absolute ${member.position} flex flex-col items-center`}
          style={{ zIndex: 10 + index }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.8, delay: index * 0.3, ease: "easeOut" }}
          variants={{
            hidden: { opacity: 0, scale: 0.5 },
            visible: { opacity: 1, scale: 1 },
          }}
        >

        {/* Floating Bubbles for Team Members */}
        <div className={`flex flex-col items-center animate-floating`} style={{ animationDelay: delay }}>
          <div className={`w-20 h-20 sm:w-30 sm:h-30 md:w-36 md:h-36 rounded-full shadow-lg border-4 border-white ${member.color}`}>
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="text-center mt-2">
            <p className="font-semibold text-xs sm:text-sm lg:text-base text-[#1a1a1a]">{member.name}</p>
            <p className="text-[10px] sm:text-sm lg:text-base text-[#310b0b]">{member.title}</p>
          </div>
        </div>
      </motion.div>
    );
  })}

  {/* Decorative Floating Bubbles */}
  <motion.div className="absolute top-[5%] left-[28%] hidden md:block" initial={{ opacity: 0, scale: 0.4 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}>
    <div className="w-20 h-20 lg:w-36 lg:h-36 rounded-full bg-[#0B4444]/40 backdrop-blur-sm shadow-lg animate-floating delay-[0ms] duration-[5000ms]" />
  </motion.div>

  <motion.div className="absolute top-[70%] left-[30%] hidden md:block" initial={{ opacity: 0, scale: 0.4 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
    <div className="w-16 h-16 lg:w-28 lg:h-28 rounded-full bg-[#440B44]/40 backdrop-blur-sm shadow-md animate-floating delay-[300ms] duration-[4500ms]" />
  </motion.div>

  <motion.div className="absolute top-[15%] left-[45%] hidden md:block" initial={{ opacity: 0, scale: 0.4 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }}>
    <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-[#372108]/30 backdrop-blur-sm text-white text-xs flex items-center justify-center font-semibold animate-floating delay-[500ms] duration-[6000ms]">
      Data
    </div>
  </motion.div>

  <motion.div className="absolute top-[50%] left-[48%] hidden md:block" initial={{ opacity: 0, scale: 0.4 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}>
    <div className="w-16 h-16 lg:w-24 lg:h-24 rounded-full bg-[#0B0B44]/30 backdrop-blur-sm text-white text-sm flex items-center justify-center font-bold shadow animate-floating delay-[200ms] duration-[5500ms]">
      Design
    </div>
  </motion.div>

  <motion.div className="absolute top-[35%] left-[26%] hidden md:block" initial={{ opacity: 0, scale: 0.4 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.5 }}>
    <div className="w-14 h-14 lg:w-20 lg:h-20 rounded-full bg-[#0C320C]/50 shadow-inner text-white text-[11px] flex items-center justify-center font-medium animate-floating delay-[400ms] duration-[4800ms]">
      Innovation
    </div>
  </motion.div>

  <motion.div className="absolute top-[80%] left-[12%] hidden md:block" initial={{ opacity: 0, scale: 0.4 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.6 }}>
    <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-full bg-[#372108]/20 shadow-sm animate-floating delay-[200ms] duration-[5000ms]" />
  </motion.div>

  <motion.div className="absolute top-[30%] left-[10%] hidden md:block" initial={{ opacity: 0, scale: 0.4 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.7 }}>
    <div className="w-8 h-8 lg:w-14 lg:h-14 rounded-full bg-[#0B0B44]/20 backdrop-blur animate-floating delay-[300ms] duration-[5200ms]" />
  </motion.div>

  <motion.div className="absolute top-[60%] left-[42%] hidden md:block" initial={{ opacity: 0, scale: 0.4 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.8 }}>
    <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-[#440B44]/30 animate-floating delay-[100ms] duration-[4700ms]" />
  </motion.div>

  <motion.div className="absolute top-[5%] left-[3%] hidden md:block" initial={{ opacity: 0, scale: 0.4 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.9 }}>
    <div className="w-24 h-24 lg:w-48 lg:h-48 rounded-full bg-[#0B4444]/30 shadow-lg blur-[2px] animate-floating delay-[600ms] duration-[7000ms]" />
  </motion.div>

  <motion.div className="absolute top-[50%] left-[20%] hidden md:block" initial={{ opacity: 0, scale: 0.4 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 1 }}>
    <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-[#440B60]/30 animate-floating delay-[350ms] duration-[5400ms]" />
  </motion.div>

    </section>

    </>
  );
};

export default MeetTheTeam;
