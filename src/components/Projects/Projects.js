import React from 'react';
import './projects.css';
// Sample data for blog posts
const blogPosts = [
    {
        id: 1,
        title: "5 UI/UX Trends to Watch in 2024",
        description: "Stay ahead of the curve with these emerging trends in UI/UX design.",
        category: "App Design",
        image: "html-css-collage-concept.jpg", // Replace with your image URL
        time: "Europe 15:10",
    },
    {
        id: 2,
        title: "The Importance of User Research",
        description: "Stay ahead of the curve with these emerging trends in UI/UX design.",
        category: "Mobility",
        image: "man-works-with-sound-laptop-early-morning.jpg", // Replace with your image URL
        time: "Europe 16:11",
    },
    {
        id: 3,
        title: "The Role of Color Psychology",
        description: "Stay ahead of the curve with these emerging trends in UI/UX design.",
        category: "Mobility",
        image: "online-web-design.jpg", // Replace with your image URL
        time: "Europe 17:12",
    },
    {
        id: 4,
        title: "The Future of Responsive Design",
        description: "Stay ahead of the curve with these emerging trends in UI/UX design.",
        category: "Web Design",
        image: "programming-background-with-person-working-with-codes-computer (1).jpg", // Replace with your image URL
        time: "Europe 18:13",
    },
    {
        id: 5,
        title: "The Impact of AI on Design",
        description: "Stay ahead of the curve with these emerging trends in UI/UX design.",
        category: "AI",
        image: "programming-background-with-person-working-with-codes-computer.jpg", // Replace with your image URL
        time: "Europe 19:14",
    },
    {
        id: 6,
        title: "The Rise of Minimalism",
        description: "Stay ahead of the curve with these emerging trends in UI/UX design.",
        category: "Design Trends",
        image: "html-css-collage-concept.jpg", // Replace with your image URL
        time: "Europe 20:15",
    },
];

function Projects() {
    return (
        <section className="py-16" style={{ backgroundColor: '#202020' }}>
            <div className="container mx-auto px-6 lg:px-12"> {/* Added padding on left and right */}
                {/* Heading */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-white">Recent Blog</h1>
                    <p className="text-gray-400 mt-2">
                        Explore the insights and trends shaping our industry
                    </p>
                </div>

                {/* Blog Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 px-36">
                    {blogPosts.map((post) => (
                        <div
                        key={post.id}
                        className="bg-[#111111] overflow-hidden shadow-md projectcard"
                        >
                            <button className='buttonview'>View</button>
                            {/* Image */}
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-56 object-cover"
                            />

                            {/* Content */}
                            <div className="p-6">
                                <span className="text-sm text-blue-400 font-semibold">
                                    {post.category}
                                </span>
                                <h2 className="text-xl font-bold text-white mt-2">{post.title}</h2>
                                <p className="text-gray-400 mt-2">{post.description}</p>
                                <div className="flex items-center mt-4">
                                    <span className="text-sm text-gray-500">{post.time}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Projects;