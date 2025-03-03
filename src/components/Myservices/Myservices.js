import React from 'react';
import Records from "../../records.json";
import './myservices.css';
import { FaLaptopCode, FaCode, FaReact, FaServer, FaDatabase, FaMobileAlt } from "react-icons/fa";
import { useScrollTrigger } from "../useScrollTrigger";
import { motion } from "framer-motion";
const iconMap = {
    "web-development": <FaLaptopCode className="text-white text-5xl" />,
    "programming": <FaCode className="text-white text-5xl" />,
    "frontend": <FaReact className="text-white text-5xl" />,
    "backend": <FaServer className="text-white text-5xl" />,
    "database": <FaDatabase className="text-white text-5xl" />,
    "app-development": <FaMobileAlt className="text-white text-5xl" />
};
function Myservices() {
    const [ref, inView] = useScrollTrigger(0.3);
    return (
        <section className="maincontainer py-20 px-4">
            <motion.div className="text-center text-white mb-12"
                ref={ref}
                initial={{ opacity: 0, x: 0 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 0 }} // Resets when out of view
                transition={{ duration: 1.2 }}>
                <p className="text-gray-400 text-lg mb-2">{Records.skills_expertise.headline}</p>
                <h1 className="text-4xl font-bold relative inline-block">
                    {Records.skills_expertise.subheadline}
                    <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#3E77F3] via-[#6861F0] to-[#8C3AEB] rounded-full"></span>
                </h1>
            </motion.div>

            <div
                ref={ref}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16"
            >
                {Records.skills_expertise.cards.map((card, index) => (
                    <motion.div
                        key={index}
                        className="service-card rounded-xl p-6 bg-gradient-to-br from-gray-800/80 to-gray-900/90 backdrop-blur-sm border border-gray-700/50 hover:border-[#6861F0]/50 transition-all duration-300 transform hover:-translate-y-2"
                        initial={{ opacity: 0, y: 0 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }} // Staggered delay
                    >
                        <div className="flex justify-center mb-6">
                            <div className="card-icon-wrapper">
                                <div className="icon-container">
                                    {iconMap[card.icon]}
                                    <div className="glow-effect"></div>
                                </div>
                                <span className="dot dot-top-left"></span>
                                <span className="dot dot-top-right"></span>
                                <span className="dot dot-bottom-left"></span>
                                <span className="dot dot-bottom-right"></span>
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-white">
                            {card.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed">{card.description}</p>
                        <div className="card-glow"></div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default Myservices;