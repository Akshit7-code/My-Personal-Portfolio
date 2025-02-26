import React from "react";
import { motion } from "framer-motion";
import Navbar from "../navbar/navbar";
export default function App() {
  return (
    <> 
     {/* Navbar */}
     <Navbar />
    <section className="h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="flex flex-col md:flex-row items-center gap-10 px-6">
        {/* Profile Image */}
        <motion.img
          src="https://via.placeholder.com/200" // Replace with your image
          alt="Profile"
          className="w-48 h-48 md:w-60 md:h-60 rounded-full object-cover border-4 border-blue-500 shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Text Content */}
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Hi, I'm <span className="text-blue-500">[Your Name]</span>
          </h1>
          <p className="mt-3 text-lg text-gray-300">
            A Passionate Web Developer | React & Tailwind Enthusiast
          </p>

          {/* CTA Button */}
          <motion.a
            href="#contact"
            className="mt-6 inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-lg text-lg font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </motion.div>
      </div>
    </section>
    </>
  );
}
