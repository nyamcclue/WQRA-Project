import React from "react";
import "./GeminiChatbot.css"; // ✅ Import CSS for styling

const GeminiChatbot = () => {
  return (
    <button className="gemini-button">
      <img src="/chatbot.png" alt="Gemini AI" className="gemini-icon" />
    </button>
  );
};

export default GeminiChatbot;
