import React, { useState } from 'react';
import './projects.css';
import { useScrollTrigger } from "../useScrollTrigger";
import { motion } from "framer-motion";
// Sample data for blog posts
const blogPosts = [
    {
        "id": 1,
        "title": "QR Code Generator",
        "description": "Generate custom QR codes instantly for websites, business cards, payments, and more with ease.",
        "category": "Tools",
        "image": "qrcode.jpg",
        "time": "Try Live Demo",
        "link": "https://qr-code-generator-8pfb.onrender.com"
    },
    {
        "id": 2,
        "title": "Image Search Engine - Infinite Gaze",
        "description": "Find similar images online using AI-powered search technology for better accuracy and faster results effortlessly.",
        "category": "API integration",
        "image": "searchengine.jpg",
        "time": "Try Live Demo",
        "link": "https://image-search-engine-infinite-gaze.onrender.com"
    },
    {
        "id": 3,
        "title": "EMI Calculator",
        "description": "Easily calculate your monthly EMI based on loan amount, interest rate, and tenure within seconds.",
        "category": "Finance tool",
        "image": "calculator.jpg",
        "time": "Try Live Demo",
        "link": "https://emi-calculator-fkap.onrender.com"
    },
    {
        "id": 4,
        "title": "Portfolio Template",
        "description": "Showcase your work with a sleek, responsive, and modern portfolio template designed for professionals and freelancers.",
        "category": "Web Development",
        "image": "portfoliotemplate.jpg",
        "time": "Try Live Demo",
        "link": "https://repo-lv4z.onrender.com"
    },
    {
        "id": 5,
        "title": "HTML, CSS, and JS Code Editor",
        "description": "Write, test, and preview HTML, CSS, and JavaScript code in real-time with a simple interface.",
        "category": "Web Development",
        "image": "codeditor.avif",
        "time": "Try Live Demo",
        // "link": "https://qr-code-generator-8pfb.onrender.com"
    },
    {
        "id": 6,
        "title": "Accessible Mate",
        "description": "Find wheelchair-friendly and accessible places effortlessly using this app, ensuring comfort and convenience for everyone.",
        "category": "Accessibility",
        "image": "accessiblemate.jpg",
        "time": "Try Live Demo",
        // "link": "https://qr-code-generator-8pfb.onrender.com"
    }
];


function Projects() {
    const [hoveredCard, setHoveredCard] = useState(null);

    const handleMouseEnter = (cardId) => {
        setHoveredCard(cardId);
    };

    const handleMouseLeave = () => {
        setHoveredCard(null);
    };
    const [ref, inView] = useScrollTrigger(0.3);

    return (
        <section id='Projects' className="projects-container py-20 px-4">
            <div className="container mx-auto">
                {/* Heading */}
                <motion.div className="text-center text-white heading"
                    ref={ref}
                    initial={{ opacity: 0, x: 0 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 0 }} // Resets when out of view
                    transition={{ duration: 1.2 }}>
                    <p className="text-gray-400 text-base md:text-lg mb-2">Explore My Creations</p>
                    <h1 className="text-2xl md:text-4xl font-bold relative inline-block">
                        INNOVATIVE PROJECTS
                        <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 md:w-24 h-1 bg-gradient-to-r from-[#3E77F3] via-[#6861F0] to-[#8C3AEB] rounded-full"></span>
                    </h1>
                </motion.div>

                {/* Blog Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {blogPosts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            className={`project-card ${hoveredCard === post.id ? 'hovered' : ''}`}
                            onMouseEnter={() => handleMouseEnter(post.id)}
                            onMouseLeave={handleMouseLeave}
                            initial={{ opacity: 0, y: 0 }}  // Starts from below
                            whileInView={{ opacity: 1, y: 0 }}  // Comes to normal position
                            exit={{ opacity: 0, y: 0 }}  // Moves back down when exiting
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: false, amount: 0.2 }}
                        >
                            {/* Image Section */}
                            <div className="project-image-container">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="project-image"
                                />
                                <div className="image-overlay">
                                    <span className="category-badge">{post.category}</span>
                                    <button
                                        className="view-button"
                                        onClick={() => window.open(post.link, "_blank")}
                                    >
                                        View Project
                                    </button>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="project-content">
                                <div className="time-badge">
                                    <span>{post.time}</span>
                                </div>
                                <h2 className="project-title">{post.title}</h2>
                                <p className="project-description">{post.description}</p>
                            </div>
                            <div className="card-glow"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;









// import React, { useState } from 'react';
// import './projects.css';
// import { useScrollTrigger } from "../useScrollTrigger";
// import { motion } from "framer-motion";
// import Records from "../../records.json";
// // Sample data for blog posts


// function Projects() {
//     const [hoveredCard, setHoveredCard] = useState(null);

//     const handleMouseEnter = (cardId) => {
//         setHoveredCard(cardId);
//     };

//     const handleMouseLeave = () => {
//         setHoveredCard(null);
//     };
//     const [ref, inView] = useScrollTrigger(0.3);

//     return (
//         <section id='Projects' className="projects-container py-20 px-4">
//             <div className="container mx-auto">
//                 {/* Heading */}
//                 <motion.div className="text-center text-white heading"
//                 ref={ref}
//                 initial={{ opacity: 0, x: 0 }}
//                 animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 0 }} // Resets when out of view
//                 transition={{ duration: 1.2 }}>
//                     <p className="text-gray-400 text-base md:text-lg mb-2">MY PORTFOLIO</p>
//                     <h1 className="text-2xl md:text-4xl font-bold relative inline-block">
//                     RECENT BLOG
//                         <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 md:w-24 h-1 bg-gradient-to-r from-[#3E77F3] via-[#6861F0] to-[#8C3AEB] rounded-full"></span>
//                     </h1>
//                 </motion.div>

//                 {/* Blog Cards */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//                     {Records.projects.map((post, index) => (
//                         <motion.div
//                             key={post.id}
//                             className={`project-card ${hoveredCard === post.id ? 'hovered' : ''}`}
//                             onMouseEnter={() => handleMouseEnter(post.id)}
//                             onMouseLeave={handleMouseLeave}
//                             initial={{ opacity: 0, y: 0 }}  // Starts from below
//                             whileInView={{ opacity: 1, y: 0 }}  // Comes to normal position
//                             exit={{ opacity: 0, y: 0 }}  // Moves back down when exiting
//                             transition={{ duration: 0.6, delay: index * 0.2 }}
//                             viewport={{ once: false, amount: 0.2 }}
//                         >
//                             {/* Image Section */}
//                             <div className="project-image-container">
//                                 <img
//                                     src={Records.projects[index].image}
//                                     alt={post.title}
//                                     className="project-image"
//                                 />
//                                 <div className="image-overlay">
//                                     <span className="category-badge">{Records.projects[index].category}</span>
//                                     <button className="view-button">
//                                         View Project
//                                     </button>
//                                 </div>
//                             </div>

//                             {/* Content Section */}
//                             <div className="project-content">
//                                 <div className="time-badge">
//                                     {/* <span>{post.time}</span> */}
//                                 </div>
//                                 <h2 className="project-title">{Records.projects[index].title}</h2>
//                                 <p className="project-description">{Records.projects[index].description}</p>
//                             </div>
//                             <div className="card-glow"></div>
//                         </motion.div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default Projects;