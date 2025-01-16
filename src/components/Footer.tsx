// src/components/Footer.tsx
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.div
      className="fixed bottom-4 left-5 -translate-x-1/2 z-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <p className="text-sm text-gray-500 opacity-0 lg:opacity-100">
        Data provided by{" "}
        <a
          href="https://ghibliapi.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#2f728c] hover:text-[#1f4c5d] transition-colors"
        >
          Studio Ghibli API
        </a>
      </p>
    </motion.div>
  );
}
