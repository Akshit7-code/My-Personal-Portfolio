
import React from 'react';
import { ArrowRight } from 'lucide-react';
import Records from "../../records.json";
import "./about.css";
import { useScrollTrigger } from "../useScrollTrigger";
import { motion } from "framer-motion";


function About() {

    const [ref, inView] = useScrollTrigger(0.1);



    return (
        <div id='about' className="aboutmaincontainer min-h-screen text-white py-20 px-4 md:px-8 lg:px-16">
            <div className="absolute -top-10 left-0 w-full h-20 bg-gradient-to-t from-[#0B0D13] via-[#0B0D13]/80 to-transparent blur-[20px]"></div>
            <div className="thirdcontainer max-w-7xl mx-auto">
                {/* Header with animated gradient text */}
                <motion.div className="text-center text-white mb-20"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }} // ✅ Reverse animation when scrolling back up
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false, amount: 0.05 }}>

                    <p className="text-gray-400 text-base md:text-lg mb-2">{Records.about_me_section.headline}</p>
                    <h1 className="text-2xl md:text-4xl font-bold relative inline-block">
                        {Records.about_me_section.subheading}
                        <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 md:w-24 h-1 bg-gradient-to-r from-[#3E77F3] via-[#6861F0] to-[#8C3AEB] rounded-full"></span>
                    </h1>
                </motion.div>

                {/* Main content with image and text */}
                <div className="imagecontainer flex flex-col lg:flex-row items-center gap-12 mb-20">
                    {/* Image Box with enhanced effects */}
                    <motion.div
                        className="imagebox animate-section lg:w-2/4 relative group"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }} // ✅ Reverses when scrolling back up
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: false, amount: 0.05 }} // ✅ Fast trigger (5% visible)
                    >

                        <div className="absolute -inset-1 rounded-2xl blur-lg opacity-50 group-hover:opacity-70 transition-opacity duration-500"
                            style={{
                                background: "linear-gradient(135deg, #3E77F3, #8C3AEB, #6861F0)",
                                boxShadow: "0 8px 20px rgba(108, 99, 255, 0.3)"
                            }}>
                        </div>
                        <div className="relative rounded-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                alt="Profile"
                                className="w-full object-cover h-[450px] rounded-2xl shadow-2xl border-2 border-opacity-20 transition-transform duration-700 "
                                style={{ borderColor: "rgba(108, 99, 255, 0.2)" }}
                            />
                            <div className="exprencesbo absolute -bottom-6 -right-6 p-4 rounded-xl shadow-lg border border-opacity-30 backdrop-blur-sm"
                                style={{
                                    background: "linear-gradient(145deg, rgba(30, 30, 46, 0.8), rgba(45, 45, 61, 0.8))",
                                    borderColor: "rgba(108, 99, 255, 0.3)",
                                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)"
                                }}>
                                <div className=" font-bold text-4xl bg-clip-text text-transparent"
                                    style={{ backgroundImage: "linear-gradient(90deg, #3E77F3, #8C3AEB, #6861F0)" }}>
                                    10+
                                </div>
                                <div className="text-gray-300 text-sm">Years Experience</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content Box with enhanced typography and spacing */}
                    <motion.div className="animation-section lg:w-3/5 space-y-8 ml-3"
                        ref={ref}
                        initial={{ opacity: 0, x: 100 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }} // Resets when out of view
                        transition={{ duration: 1 }}>
                        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                            Professional And <span className="bg-clip-text text-transparent"
                                style={{ backgroundImage: "linear-gradient(90deg, #3E77F3, #8C3AEB, #6861F0)" }}>
                                Dedicated
                            </span> <br />
                            Creative Designer
                        </h2>



                        <p className="text-gray-300 text-lg leading-relaxed">
                            Check out 10 Best Design's updates for the top web design & development
                            companies for your needs by reviewing our list & development companies!
                            Find the best web design.
                        </p>

                        <p className="text-gray-300 text-lg leading-relaxed">
                            Custom Web Solution. 24x7 Customer Support. Secure Payment Gateway.
                            Get A Free Web Quote.
                        </p>



                        <div className='border-t border-gray-800'></div>

                        {/* Enhanced button with animation */}
                        <button
                            className="group flex items-center gap-2 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 hover:transform hover:scale-105 hover:shadow-glow"
                            style={{
                                background: "linear-gradient(90deg, #3E77F3, #8C3AEB, #6861F0)",
                                boxShadow: "0 8px 20px rgba(108, 99, 255, 0.3)"
                            }}>
                            MORE ABOUT
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>
                </div>


            </div>
        </div>
    );
}

export default About;

















// import React from 'react';
// import { ArrowRight } from 'lucide-react';
// import Records from "../../records.json";
// import "./about.css";
// import { useScrollTrigger } from "../useScrollTrigger";
// import { motion } from "framer-motion";


// function About() {

//     const [ref, inView] = useScrollTrigger(0.3);
//     return (
//         <div className="aboutmaincontainer min-h-screen text-white py-20 px-4 md:px-8 lg:px-16">
//             <div className="absolute -top-10 left-0 w-full h-20 bg-gradient-to-t from-[#0B0D13] via-[#0B0D13]/80 to-transparent blur-[20px]"></div>
//             <div className="max-w-7xl mx-auto px-5">
{/* Header with animated gradient text */ }
{/* <motion.div className="text-center text-white mb-20"
                ref={ref}
                initial={{ opacity: 0, y: 0 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 0 }} // Reverts when out of view
                transition={{ duration: 1 }}>
                    <p className="text-gray-400 text-lg mb-2">{Records.about_me_section.headline}</p>
                    <h1 className="text-4xl font-bold relative inline-block">
                        {Records.about_me_section.subheading}
                        <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#3E77F3] via-[#6861F0] to-[#8C3AEB] rounded-full"></span>
                    </h1>
                </motion.div> */}

{/* Main content with image and text */ }
{/* <div className="flex flex-col lg:flex-row items-center gap-12 mb-20"> */ }
{/* Image Box with enhanced effects */ }
{/* <motion.div
                        ref={ref}
                        className="animate-section lg:w-2/4 relative group"
                        initial={{ opacity: 0, x: -100 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }} // Resets when out of view
                        transition={{ duration: 1 }}>
                        <div className="absolute -inset-1 rounded-2xl blur-lg opacity-50 group-hover:opacity-70 transition-opacity duration-500"
                            style={{
                                background: "linear-gradient(135deg, #3E77F3, #8C3AEB, #6861F0)",
                                boxShadow: "0 8px 20px rgba(108, 99, 255, 0.3)"
                            }}>
                        </div>
                        <div className="relative rounded-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                alt="Profile"
                                className="w-full object-cover h-[450px] rounded-2xl shadow-2xl border-2 border-opacity-20 transition-transform duration-700 "
                                style={{ borderColor: "rgba(108, 99, 255, 0.2)" }}
                            />
                            <div className="absolute -bottom-6 -right-6 p-4 rounded-xl shadow-lg border border-opacity-30 backdrop-blur-sm"
                                style={{
                                    background: "linear-gradient(145deg, rgba(30, 30, 46, 0.8), rgba(45, 45, 61, 0.8))",
                                    borderColor: "rgba(108, 99, 255, 0.3)",
                                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)"
                                }}>
                                <div className="font-bold text-4xl bg-clip-text text-transparent"
                                    style={{ backgroundImage: "linear-gradient(90deg, #3E77F3, #8C3AEB, #6861F0)" }}>
                                    10+
                                </div>
                                <div className="text-gray-300 text-sm">Years Experience</div>
                            </div>
                        </div>
                    </motion.div> */}

{/* Content Box with enhanced typography and spacing */ }
{/* <motion.div className="animation-section lg:w-3/5 space-y-8 ml-6"
                        ref={ref}
                        initial={{ opacity: 0, x: 100 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }} // Resets when out of view
                        transition={{ duration: 1 }}>
                        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                            Professional And <span className="bg-clip-text text-transparent"
                                style={{ backgroundImage: "linear-gradient(90deg, #3E77F3, #8C3AEB, #6861F0)" }}>
                                Dedicated
                            </span> <br />
                            Creative Designer
                        </h2> */}

{/* <div className="h-1 w-20 rounded-full"
                            style={{ background: "linear-gradient(90deg, #3E77F3, #8C3AEB, #6861F0)" }}>
                        </div> */}
{/* 
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Check out 10 Best Design's updates for the top web design & development
                            companies for your needs by reviewing our list & development companies!
                            Find the best web design.
                        </p>

                        <p className="text-gray-300 text-lg leading-relaxed">
                            Custom Web Solution. 24x7 Customer Support. Secure Payment Gateway.
                            Get A Free Web Quote.
                        </p> */}

{/* Signature section with enhanced styling */ }
{/* <div className="pt-6 border-t border-gray-800">
                            <div className="flex flex-wrap items-end gap-6">
                                <div className="signature">
                                    <h2 className="text-2xl font-bold bg-clip-text text-transparent"
                                        style={{ backgroundImage: "linear-gradient(90deg, #3E77F3, #8C3AEB, #6861F0)" }}>
                                        Frank Sinatra
                                    </h2>
                                    <p className="text-gray-400">CEO Of Designlab IT</p>
                                </div>
                                <div className="relative">
                                    <div className="absolute inset-0 rounded-full blur-sm opacity-50"
                                        style={{ background: "linear-gradient(135deg, #3E77F3, #8C3AEB, #6861F0)" }}>
                                    </div>
                                    <img 
                                        src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
                                        alt="Signature" 
                                        className="relative h-16 w-16 rounded-full border-2 object-cover"
                                        style={{ borderColor: "#6861F0" }}
                                    />
                                </div>
                            </div>
                        </div> */}

{/* <div className='border-t border-gray-800'></div> */ }

{/* Enhanced button with animation */ }
{/* <button
                            className="group flex items-center gap-2 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 hover:transform hover:scale-105 hover:shadow-glow"
                            style={{
                                background: "linear-gradient(90deg, #3E77F3, #8C3AEB, #6861F0)",
                                boxShadow: "0 8px 20px rgba(108, 99, 255, 0.3)"
                            }}>
                            MORE ABOUT
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>
                </div> */}

{/* Timeline section replacing skills boxes */ }



{/* Stats in a horizontal bar */ }
{/* <div className="mt-20 p-8 rounded-2xl backdrop-blur-sm border border-gray-700"
                    style={{
                        background: "linear-gradient(145deg, rgba(30, 30, 46, 0.7), rgba(45, 45, 61, 0.7))",
                        boxShadow: "0 15px 35px rgba(0, 0, 0, 0.2)"
                    }}>
                    <div className="flex flex-wrap justify-between items-center">
                        {[
                            { number: "250+", label: "Projects Completed" },
                            { number: "120+", label: "Happy Clients" },
                            { number: "15+", label: "Awards Won" },
                            { number: "10+", label: "Years Experience" }
                        ].map((stat, index) => (
                            <div key={index} className="w-1/2 md:w-1/4 text-center p-4">
                                <h3 className="text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent"
                                    style={{ backgroundImage: "linear-gradient(90deg, #3E77F3, #8C3AEB, #6861F0)" }}>
                                    {stat.number}
                                </h3>
                                <p className="text-gray-400">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div> */}
{/* </div>
        </div>
    );
}

export default About; */}











