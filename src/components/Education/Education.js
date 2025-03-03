import React, { useState } from 'react';
import './education.css';
import { useScrollTrigger } from "../useScrollTrigger";
import { motion } from "framer-motion";

function Education() {
  const [hoveredDiv, setHoveredDiv] = useState(null);

  // Using the same color theme as in the services section
  const primaryGradient = 'linear-gradient(135deg, #3E77F3, #6861F0, #8C3AEB)';

  const handleMouseEnter = (divIndex) => {
    setHoveredDiv(divIndex);
  };

  const handleMouseLeave = () => {
    setHoveredDiv(null);
  };

  const [ref, inView] = useScrollTrigger(0.3);

  return (


    <div className="education-container py-20 px-4 min-h-screen text-white font-sans">
      <motion.div className="text-center text-white mb-20"
        ref={ref}
        initial={{ opacity: 0, y: 70 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Reverts when out of view
        transition={{ duration: 1 }}>
        <p className="text-gray-400 text-lg mb-2">MY JOURNEY</p>
        <h1 className="text-4xl font-bold relative inline-block">
          WORK PARTICIPATION
          <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#3E77F3] via-[#6861F0] to-[#8C3AEB] rounded-full"></span>
        </h1>

      </motion.div>

      <div className="max-w-6xl mx-auto relative">
        <div className="timeline-container">
          <div
            className={`timeline-dot dot-1 ${hoveredDiv === 1 ? 'active' : ''}`}
            style={{
              borderColor: hoveredDiv === 1 ? '#6861F0' : 'rgb(125, 125, 125)'
            }}
          ></div>
          <div
            className={`timeline-dot dot-2 ${hoveredDiv === 2 ? 'active' : ''}`}
            style={{
              borderColor: hoveredDiv === 2 ? '#6861F0' : 'rgb(125, 125, 125)'
            }}
          ></div>
          <div
            className={`timeline-dot dot-3 ${hoveredDiv === 3 ? 'active' : ''}`}
            style={{
              borderColor: hoveredDiv === 3 ? '#6861F0' : 'rgb(125, 125, 125)'
            }}
          ></div>
          <div className="timeline-line">
            <div
              className="timeline-line-inner"
              style={{
                background: hoveredDiv ? primaryGradient : 'rgba(125, 125, 125, 0.5)',
                height: hoveredDiv ? '100%' : '0%'
              }}
            ></div>
          </div>

          {/* Web Developer Experience (Left Side) */}
          <motion.div
        className="timeline-item left"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="timeline-period">2015 - 2018</div>
        <div className="timeline-card">
          <h3 className="timeline-title">Web Developer</h3>
          <p className="timeline-subtitle">Open: 16Messages</p>
          <p className="timeline-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Oma lorem ipsum vel machete fucollore. Donec sedere et unus cuore quam dolor sit amet.
          </p>
          <div className="card-glow"></div>
        </div>
      </motion.div>

      {/* Timeline Item 2 */}
      <motion.div
        className="timeline-item right"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="timeline-period2">2017 - 2019</div>
        <div className="timeline-card">
          <h3 className="timeline-title">Graphic Designer</h3>
          <p className="timeline-subtitle">Educationle - Home</p>
          <p className="timeline-content">
            I nascetur adhurge fixe eforto magnitudin viscipull tempor ut non-dimentum nec veniam dici. Oma nostra natura puritatibus est magna da pariaturat incertum, trascatur ridiculata muta. Donec quam felix.
          </p>
          <div className="card-glow"></div>
        </div>
        <div className='timeline-date right-date'>
          <h2 className="text-xl font-semibold">2017 - 2019</h2>
        </div>
      </motion.div>

      {/* Timeline Item 3 */}
      <motion.div
        className="timeline-item left"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="timeline-period">2019 - 2022</div>
        <div className="timeline-card">
          <h3 className="timeline-title">Web Developer</h3>
          <p className="timeline-subtitle">Open: 16Messages</p>
          <p className="timeline-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Oma lorem ipsum vel machete fucollore. Donec sedere et unus cuore quam dolor sit amet.
          </p>
          <div className="card-glow"></div>
        </div>
        <div className='timeline-date left-date'>
          <h2 className="text-xl font-semibold">2019 - 2022</h2>
        </div>
      </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Education;