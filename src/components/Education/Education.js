import React, { useState } from 'react';
import './education.css';
import { useScrollTrigger } from "../useScrollTrigger";
import { motion } from "framer-motion";
import Records from "../../records.json";

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
    <div id='Education' className="education-container py-20 educationmainncontainer px-2 md:px-4 min-h-screen text-white font-sans">
      <motion.div
        className="text-center text-white mb-10 md:mb-20"
        ref={ref}
        initial={{ opacity: 0, y: 70 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
      >
        <p className="text-gray-400 text-base md:text-lg mb-2">GROWTH & LEARNING</p>
<h1 className="text-2xl md:text-4xl font-bold relative inline-block">
    MILESTONES OF KNOWLEDGE
    <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 md:w-24 h-1 bg-gradient-to-r from-[#3E77F3] via-[#6861F0] to-[#8C3AEB] rounded-full"></span>
</h1>
      </motion.div>

      <div className="max-w-6xl mx-auto relative px-4 md:px-6">
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
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="timeline-period text-sm md:text-base">{Records.education[0].duration}</div>
            <div className={`timeline-card ${hoveredDiv === 1 ? 'hovered' : ''}`}>
              <h3 className="timeline-title text-lg md:text-xl">{Records.education[0].title}</h3>
              <p className="timeline-subtitle text-sm md:text-base">{Records.education[0].institution}</p>
              <p className="timeline-content text-sm md:text-base">
                {Records.education[0].description}
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
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="timeline-period2 text-sm md:text-base">{Records.education[2].duration}</div>
            <div className={`timeline-card ${hoveredDiv === 3 ? 'hovered' : ''}`}>
              <h3 className="timeline-title text-lg md:text-xl">{Records.education[2].title}</h3>
              <p className="timeline-subtitle text-sm md:text-base">{Records.education[2].institution}</p>
              <p className="timeline-content text-sm md:text-base">
              {Records.education[2].description}              </p>
              <div className="card-glow"></div>
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
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="timeline-period text-sm md:text-base">{Records.education[1].duration}</div>
            <div className={`timeline-card ${hoveredDiv === 2 ? 'hovered' : ''}`}>
              <h3 className="timeline-title text-lg md:text-xl">{Records.education[1].title}</h3>
              <p className="timeline-subtitle text-sm md:text-base">{Records.education[1].institution}</p>
              <p className="timeline-content text-sm md:text-base">
                {Records.education[1].description}              </p>
              <div className="card-glow"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Education;





//   return (
//     <div className="education-container py-16 px-4 min-h-screen text-white font-sans">
//       <div className="text-center text-white mb-12">
//         <p className="text-gray-400 text-lg mb-2">MY JOURNEY</p>
//         <h1 className="text-4xl font-bold relative inline-block">
//           WORK PARTICIPATION
//           <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#3E77F3] via-[#6861F0] to-[#8C3AEB] rounded-full"></span>
//         </h1>
//       </div>
//       <p className="text-base mb-12 text-center text-gray-400 max-w-2xl mx-auto">
//         Obviously it's a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.
//       </p>

//       <div className="max-w-6xl mx-auto relative">
//         <div className="timeline-container">
//           <div
//             className={`timeline-dot dot-1 ${hoveredDiv === 1 ? 'active' : ''}`}
//             style={{
//               borderColor: hoveredDiv === 1 ? '#6861F0' : 'rgb(125, 125, 125)'
//             }}
//           ></div>
//           <div
//             className={`timeline-dot dot-2 ${hoveredDiv === 2 ? 'active' : ''}`}
//             style={{
//               borderColor: hoveredDiv === 2 ? '#6861F0' : 'rgb(125, 125, 125)'
//             }}
//           ></div>
//           <div
//             className={`timeline-dot dot-3 ${hoveredDiv === 3 ? 'active' : ''}`}
//             style={{
//               borderColor: hoveredDiv === 3 ? '#6861F0' : 'rgb(125, 125, 125)'
//             }}
//           ></div>
//           <div className="timeline-line">
//             <div
//               className="timeline-line-inner"
//               style={{
//                 background: hoveredDiv ? primaryGradient : 'rgba(125, 125, 125, 0.5)',
//                 height: hoveredDiv ? '100%' : '0%'
//               }}
//             ></div>
//           </div>

//           {/* Web Developer Experience (Left Side) */}
//           <div className='timeline-item left' onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave}>
//             <div className={`timeline-card ${hoveredDiv === 1 ? 'hovered' : ''}`}>
//               <div className="timeline-period">2015 - 2018</div>
//               <h3 className="timeline-title">Web Developer</h3>
//               <p className="timeline-subtitle">Open: 16Messages</p>
//               <p className="timeline-content">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Oma lorem ipsum vel machete fucollore. Donec sedere et unus cuore quam dolor sit amet.
//               </p>
//               <div className="card-glow"></div>
//             </div>
//             <div className='timeline-date left-date'>
//               <h2 className="text-xl font-semibold">2015 - 2018</h2>
//             </div>
//           </div>

//           {/* Graphic Designer Experience (Right Side) */}
//           <div className='timeline-item right' onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={handleMouseLeave}>
//             <div className={`timeline-card ${hoveredDiv === 2 ? 'hovered' : ''}`}>
//               <div className="timeline-period">2017 - 2019</div>
//               <h3 className="timeline-title">Graphic Designer</h3>
//               <p className="timeline-subtitle">Educationle - Home</p>
//               <p className="timeline-content">
//                 I nascetur adhurge fixe eforto magnitudin viscipull tempor ut non-dimentum nec veniam dici. Oma nostra natura puritatibus est magna da pariaturat incertum, trascatur ridiculata muta. Donec quam felix.
//               </p>
//               <div className="card-glow"></div>
//             </div>
//             <div className='timeline-date right-date'>
//               <h2 className="text-xl font-semibold">2017 - 2019</h2>
//             </div>
//           </div>

//           {/* Web Developer Experience (Left Side) */}
//           <div className='timeline-item left' onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={handleMouseLeave}>
//             <div className={`timeline-card ${hoveredDiv === 3 ? 'hovered' : ''}`}>
//               <div className="timeline-period">2019 - 2022</div>
//               <h3 className="timeline-title">Web Developer</h3>
//               <p className="timeline-subtitle">Open: 16Messages</p>
//               <p className="timeline-content">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Oma lorem ipsum vel machete fucollore. Donec sedere et unus cuore quam dolor sit amet.
//               </p>
//               <div className="card-glow"></div>
//             </div>
//             <div className='timeline-date left-date'>
//               <h2 className="text-xl font-semibold">2019 - 2022</h2>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Education;