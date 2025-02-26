import React from 'react';
import Records from "../../records.json";
import './myservices.css';
import { FaLaptopCode, FaCode, FaReact, FaServer, FaDatabase, FaMobileAlt } from "react-icons/fa";

const iconMap = {
    "web-development": <FaLaptopCode className="text-white text-5xl" />,
    "programming": <FaCode className="text-white text-5xl" />,
    "frontend": <FaReact className="text-white text-5xl" />,
    "backend": <FaServer className="text-white text-5xl" />,
    "database": <FaDatabase className="text-white text-5xl" />,
    "app-development": <FaMobileAlt className="text-white text-5xl" />
};

function Myservices() {
    return (
        <section className="maincontainer py-16">
            <div className="text-center text-white">
                <p className="text-gray-400">{Records.skills_expertise.headline}</p>
                <h1 className="text-3xl font-bold">{Records.skills_expertise.subheadline}</h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12">
                {Records.skills_expertise.cards.map((card, index) => (
                    <div
                        key={index}
                        className="rounded-lg shadow-lg text-center parentscard"
                    >
                        <div className="flex justify-center mb-4">
                            <div className='carddesign'>
                                <span className='dot1'></span>
                                <span className="icon-class">{iconMap[card.icon]}</span> {/* Add class here */}
                                <span className='dot2'></span>
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-white">{card.title}</h3>
                        <p className="text-gray-400">{card.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Myservices;
