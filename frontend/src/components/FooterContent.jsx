import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is WQRA?",
    answer: "WQRA stands for Water Quality Reporting and Analysis. It transforms EPA data into public insight for safer water.",
  },
  {
    question: "Who can use this platform?",
    answer: "Residents, researchers, and policymakers—anyone looking to explore or monitor U.S. water systems.",
  },
  {
    question: "How do I report an issue?",
    answer: "Reach out via support@WQRA.com. We’re here to help troubleshoot or document water quality concerns.",
  },
  {
    question: "How does WQRA collect data?",
    answer: "WQRA pulls data from EPA sources, covering water quality and contamination information across the U.S.",
  },
  {
    question: "How often is the data updated on WQRA?",
    answer: "The data on WQRA is regularly updated to provide the most current and accurate information about water quality and contamination across the United States.",
  },
];

const AccordionItem = ({ faq, isOpen, onClick }) => (
  <div className="border-b border-white/20">
    <button
      className="w-full flex items-center text-left py-3 text-base font-semibold text-white gap-3"
      onClick={onClick}
    >
      <span className="text-2xl">{isOpen ? '−' : '+'}</span>
      <span>{faq.question}</span>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="overflow-hidden text-sm text-gray-300 pb-3 pr-2 pl-9"
        >
          {faq.answer}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const FooterContent = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
    <div className="relative w-full bg-[#08344e] text-white font-['Sora'] py-20 px-8 md:px-24 rounded-t-4xl">
      
      {/* Top Contact Section */}
        <div className="flex flex-col md:flex-row md:justify-between mb-16">
            <div className="space-y-4">
                <h2 className="text-2xl font-boldonse">WQRA</h2>
                <p className="text-gray-400">123 Waterway Drive, Lafayette, LA 70501</p>
            </div>
        </div>

      
        {/* Middle Contact Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-100 text-sm text-gray-400 mb-16">
            <div className="space-y-2">
                <h3 className="uppercase text-xs font-bold text-white mb-2">General Inquiries</h3>
                <p>Email: info@WQRA.com</p>
                <p>Phone: (337) 555-1234</p>
            </div>
            <div className="space-y-2">
                <h3 className="uppercase text-xs font-bold text-white mb-2">Technical Support</h3>
                <p>Email: support@WQRA.com</p>
                <p>Phone: (337) 555-5678</p>
            </div>
            <div className="space-y-2">
                <h3 className="uppercase text-xs font-bold text-white mb-2">Media and Press</h3>
                <p>Email: media@WQRA.com</p>
                <p>Phone: (337) 555-7890</p>
            </div>
        </div>

        {/* FAQ Accordion */}
        <div className="mb-16">
            <h3 className="text-xl font-semibold mb-6">FAQs</h3>
            {faqs.map((faq, index) => (
                <AccordionItem
                key={index}
                faq={faq}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                />
            ))}
        </div>

      
        <div className="flex justify-center">
            <button className="flex items-center gap-2 px-6 py-6 rounded-full font-bold text-black">
        </button>
        </div>

        {/* Large WQRA Logo Background */}
        <div className="absolute bottom-0 left-0 w-full opacity-8 text-center pointer-events-none">
            <h1 className="text-[18vw] font-boldonse tracking-tighter">WQRA</h1>
        </div>

        {/* Footer Bottom Text */}
        <div className="mt-16 text-center text-xs text-gray-500">
            © 2025 WQRA. All rights reserved.
        </div>

    </div>
    </>
  );
};

export default FooterContent;
