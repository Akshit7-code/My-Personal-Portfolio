import React from 'react';
import './contact.css';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import Records from "../../records.json";
import GoogleMapComponent from "../googlemap";
const iconMap = {
    "location": <FaMapMarkerAlt className="icons text-5xl" />,
    "email": <FaEnvelope className="icons text-5xl" />,
    "phone": <FaPhone className="icons text-5xl" />
};


function Contact() {
    return (
        <>
        <section className="py-16 px-6 maincontact">
            <div className="max-w-6xl mx-auto">
                {/* Cards Container */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {Records.contact.map((contact, index) => (
                        <div
                            key={index}
                            className="cardscontact shadow-lg text-center transition-transform transform"
                        >
                            <div className="flex justify-center mb-4">
                                <span className="iconcontact p-4 rounded-full">{iconMap[contact.icon]}</span>
                            </div>
                            <h2 className="text-xl font-semibold text-white">{contact.title}</h2>
                            {Array.isArray(contact.details) ? (
                                contact.details.map((detail, i) => (
                                    <p key={i} className="text-gray-400 mt-2">{detail}</p>
                                ))
                            ) : (
                                <p className="text-gray-400 mt-2">{contact.details}</p>
                            )}
                        </div>
                    ))}
                </div>

                {/* Contact Form (Optional) */}
                <div className="max-w-full mx-auto text-center mt-20">
                    <h2 className="font-700 text-white">Contact</h2>
                    <h3 className="text-3xl font-bold text-white mb-4">Have Any Question?</h3>

                    <form className="bg-[#1F1F1F] formcontainer rounded-lg shadow-lg mt-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Name"
                                className="textfields w-full px-4 py-3 bg-[#2A2A2A] text-white rounded-full  transition"
                            />
                            <input
                                type="text"
                                placeholder="Lastname"
                                className="textfields w-full px-4 py-3 bg-[#2A2A2A] text-white rounded-full  transition"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <input
                                type="email"
                                placeholder="Email"
                                className="textfields w-full px-4 py-3 bg-[#2A2A2A] text-white rounded-full  transition"
                            />
                            <input
                                type="text"
                                placeholder="Subject"
                                className="textfields w-full px-4 py-3 bg-[#2A2A2A] text-white rounded-full  transition"
                            />
                        </div>

                        <textarea
                            placeholder="Message"
                            rows="4"
                            className="textfields w-full mt-4 px-4 py-3 bg-[#2A2A2A] text-white rounded-xl  transition"
                        ></textarea>

                        <button
                            type="submit"
                            className="btn w-1/6 mt-5 py-3 bg-[#2A2A2A] text-white font-semibold rounded-full hover:bg-[#21E786] hover:text-white transition"
                        >
                            SEND MESSAGE
                        </button>
                    </form>
                </div>

            </div>
        </section>
            <div>
                <GoogleMapComponent />
                <footer style={{ background: "#111", color: "#fff", textAlign: "center", padding: "20px" }}>
                    <p>© Copyright 2025. All rights reserved.</p>
                </footer>
            </div>
            </>
    );
}

export default Contact;
