import React, { useState } from 'react';
import './projects.css';
import { useScrollTrigger } from "../useScrollTrigger";
import { motion } from "framer-motion";
// Sample data for blog posts
const blogPosts = [
    {
        id: 1,
        title: "5 UI/UX Trends to Watch in 2024",
        description: "Stay ahead of the curve with these emerging trends in UI/UX design.",
        category: "App Design",
        image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80",
        time: "Europe 15:10",
    },
    {
        id: 2,
        title: "The Importance of User Research",
        description: "Stay ahead of the curve with these emerging trends in UI/UX design.",
        category: "Mobility",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
        time: "Europe 16:11",
    },
    {
        id: 3,
        title: "The Role of Color Psychology",
        description: "Stay ahead of the curve with these emerging trends in UI/UX design.",
        category: "Mobility",
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
        time: "Europe 17:12",
    },
    {
        id: 4,
        title: "The Future of Responsive Design",
        description: "Stay ahead of the curve with these emerging trends in UI/UX design.",
        category: "Web Design",
        image: "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        time: "Europe 18:13",
    },
    {
        id: 5,
        title: "The Impact of AI on Design",
        description: "Stay ahead of the curve with these emerging trends in UI/UX design.",
        category: "AI",
        image: "https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        time: "Europe 19:14",
    },
    {
        id: 6,
        title: "The Rise of Minimalism",
        description: "Stay ahead of the curve with these emerging trends in UI/UX design.",
        category: "Design Trends",
        image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80",
        time: "Europe 20:15",
    },
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
                <motion.div className="text-center text-white mb-20"
                ref={ref}
                initial={{ opacity: 0, x: 0 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 0 }} // Resets when out of view
                transition={{ duration: 1.2 }}>
                    <p className="text-gray-400 text-base md:text-lg mb-2">MY PORTFOLIO</p>
                    <h1 className="text-2xl md:text-4xl font-bold relative inline-block">
                    RECENT BLOG
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
                                    <button className="view-button">
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