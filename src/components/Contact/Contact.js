import React, { useState } from 'react';
import './contact.css';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import Records from "../../records.json";
import GoogleMapComponent from "../googlemap";
// import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaSkype, FaLinkedin, FaHeart } from "react-icons/fa";
import { Github, Linkedin, Twitter } from 'lucide-react';
import { useScrollTrigger } from "../useScrollTrigger";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import { useRef } from 'react';


// Icon map
const iconMap = {
    location: <FaMapMarkerAlt className="icons text-5xl text-gray-300" />,
    email: <FaEnvelope className="icons text-5xl text-gray-300" />,
    phone: <FaPhone className="icons text-5xl text-gray-300" />,
};

function Contact() {
    const [ref, inView] = useScrollTrigger(0.3);

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_k998isf', 'template_ehca4x1', form.current, {
                publicKey: 'p7H4TZxJ3FG6eS6b5',
            })
            .then(
                () => {
                    alert('Message send successfully!');
                    form.current.reset(); // Reset the form after successful submission
                },
                (error) => {
                    alert('FAILED...', error.text);
                },
            );
    };

    return (
        <>
            <section id='contact' className="pt-16 px-4 maincontact">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {Records.contact.map((contact, index) => (
                            <motion.div
                                key={index}
                                className="cardscontact shadow-lg text-center transition-transform transform cards"
                                style={{
                                    background: "rgba(30, 30, 40, 0.8)",
                                    backdropFilter: "blur(10px)",
                                    border: "1px solid rgba(125, 125, 125, 0.2)",
                                    borderRadius: "12px",
                                    overflow: "hidden",
                                    transition: "all 0.3s ease",
                                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)"
                                }}
                                initial={{ opacity: 0, y: 10 }}  // Starts from below
                                whileInView={{ opacity: 1, y: 0 }}  // Scroll-in animation
                                exit={{ opacity: 0, y: 10 }}  // Moves back down when exiting
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: false, amount: 0.2 }}
                            >
                                <div className="flex justify-center mb-4">
                                    <span
                                        className="iconcontact p-4 rounded-full"
                                        style={{
                                            background: "linear-gradient(135deg, #3E77F3, #8C3AEB, #6861F0)",
                                            boxShadow: "0 8px 20px rgba(108, 99, 255, 0.3)"
                                        }}
                                    >
                                        {iconMap[contact.icon]}
                                    </span>
                                </div>
                                <h2 className="text-xl font-semibold text-white">{contact.title}</h2>
                                {Array.isArray(contact.details) ? (
                                    contact.details.map((detail, i) => (
                                        <p key={i} className="text-gray-400 mt-2">{detail}</p>
                                    ))
                                ) : (
                                    <p className="text-gray-400 mt-2">{contact.details}</p>
                                )}
                            </motion.div>
                        ))}
                    </div>
                    <motion.div className="max-w-full mx-auto text-center mt-20 formdata"
                        ref={ref}
                        initial={{ opacity: 0, y: 80 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }} // Reverts when out of view
                        transition={{ duration: 0.8 }}>
                        <h2 className="font-700 text-white">Contact</h2>
                        <h3 className="text-3xl font-bold text-white mb-4">Have Any Question?</h3>

                        <form ref={form} onSubmit={sendEmail} className="form rounded-2xl shadow-2xl mt-10 border border-gray-700" style={{
                            background: "rgba(30, 30, 40, 1)",
                            backdropFilter: "blur(10px)",
                        }}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        name='name'
                                        required
                                        className="w-full px-6 py-4 bg-gray-700 text-white rounded-full focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all border border-gray-600"
                                    />
                                </div>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Lastname"
                                        name='lastname'
                                        className="w-full px-6 py-4 bg-gray-700 text-white rounded-full focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all border border-gray-600"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                                <div className="relative">
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        name='email'
                                        required
                                        className="w-full px-6 py-4 bg-gray-700 text-white rounded-full focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all border border-gray-600"
                                    />
                                </div>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Subject"
                                        name='subject'
                                        className="w-full px-6 py-4 bg-gray-700 text-white rounded-full focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all border border-gray-600"
                                    />
                                </div>
                            </div>

                            <div className="mt-6">
                                <textarea
                                    placeholder="Message"
                                    rows={4}
                                    name='message'
                                    required
                                    className="w-full px-6 py-4 bg-gray-700 text-white rounded-2xl focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all border border-gray-600"
                                ></textarea>
                            </div>

                            <div className=" mt-8 flex justify-center">
                                <button
                                    type="submit" value="Send"
                                    className=" text-cyan-50 px-10 py-4 rounded-full font-semibold transition-all transform hover:scale-105"
                                    style={{
                                        background: "linear-gradient(90deg, #3E77F3, #8C3AEB, #6861F0)",
                                        boxShadow: "0 8px 20px rgba(108, 99, 255, 0.6)" // Increased opacity for more glow
                                    }}
                                >
                                    SEND MESSAGE
                                </button>
                            </div>
                        </form>
                    </motion.div>

                </div>
            </section>
            <div className='mapdiv'>
                <GoogleMapComponent />
                <footer style={{ background: "#0F1117", color: "#fff", textAlign: "center", padding: "30px" }}>
                    <div style={{ marginBottom: "0px", display: "flex", justifyContent: "center" }}>
                        <img src="logo.png" alt="Logo" style={{ width: "150px" }} /> {/* Adjust the logo size */}
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginBottom: "20px", paddingTop: "0px" }}>
                        {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", transition: "opacity 0.3s" }} className="social-icon">
                            <FaFacebook className="text-2xl" />
                        </a> */}
                        {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", transition: "opacity 0.3s" }} className="social-icon">
                            <FaTwitter className="text-2xl" />
                        </a> */}
                        {/* <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", transition: "opacity 0.3s" }} className="social-icon">
                            <FaLinkedin className="text-2xl" />
                        </a> */}

                        <a href="https://github.com/Akshit7-code" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-all duration-300 transform hover:scale-110">
                            <Github size={24} className="hover:animate-spin-slow" />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-all duration-300 transform hover:scale-110">
                            <Linkedin size={24} className="hover:animate-spin-slow" />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-all duration-300 transform hover:scale-110">
                            <Twitter size={24} className="hover:animate-spin-slow" />
                        </a>
                        {/* <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", transition: "opacity 0.3s" }} className="social-icon">
                            <FaPinterest className="text-2xl" />
                        </a> */}
                        {/* <a href="https://skype.com" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", transition: "opacity 0.3s" }} className="social-icon">
                            <FaSkype className="text-2xl" />
                        </a> */}
                    </div>

                    {/* Copyright Text */}
                    <p style={{ fontSize: "14px" }}>© Copyright 2025 portfar. All rights reserved.</p>
                </footer>
            </div>

        </>
    );
}

export default Contact;
