"use client";

import { motion } from "framer-motion";

export default function FloatingGeminiButton() {
  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 shadow-[0_0_20px_rgba(168,85,247,0.5)] text-white hover:shadow-[0_0_30px_rgba(168,85,247,0.8)] transition-shadow duration-300 group"
      onClick={() => alert("Ask Gemini AI Assistant")}
      aria-label="Ask Gemini"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 drop-shadow-md"
      >
        <path
          d="M12 2C12 7.52285 16.4772 12 22 12C16.4772 12 12 16.4772 12 22C12 16.4772 7.52285 12 2 12C7.52285 12 12 7.52285 12 2Z"
          fill="currentColor"
        />
        <path
          d="M19 15C19 16.6569 20.3431 18 22 18C20.3431 18 19 19.3431 19 21C19 19.3431 17.6569 18 16 18C17.6569 18 19 16.6569 19 15Z"
          fill="currentColor"
        />
      </svg>
      {/* Tooltip */}
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-sm text-white px-3 py-1 rounded-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10">
        Ask Gemini
      </span>
    </motion.button>
  );
}
