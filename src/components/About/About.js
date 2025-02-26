import React from 'react';
import './about.css';

function About() {
    return (
        <div className="about-container flex items-center text-white justify-center gap-6 aboutmaincontainer">
            {/* Image Box */}
            <div className="image-box w-1/3">
               <img src="about.f67bfd4d.jpg" alt="Profile" className="rounded-lg shadow-lg" />
            </div>
            {/* Content Box */}
            <div className="content-box w-1/2 pl-10 infobox">
                <h1 className="text-4xl font-bold mb-4 text-white">Professional And Dedicated <br /> Creative Designer</h1>
                <p className="text-gray-400 mb-6">
                    Check out 10 Best Design's updates for the top web design & development companies for your needs
                    by reviewing our list & development companies! Find the best web design.
                    Web Design Consulting. Comprehensive Directory. Top Reviewed Design Firms. Types: Enterprise Design Firms,
                    Startup Design Firms, Custom Design Firms, eCommerce Design Firms, App Design Firms.
                </p>
                <p className="text-gray-400 mb-6">
                    Custom Web Solution. 24x7 Customer Support. Secure Payment Gateway. Get A Free Web Quote.
                    24/7 Chat Support. Services: Web Page Design, Landing Page Design, App Development, Mobile Website Design.
                </p>
                <div className="signature mb-4">
                    <h2 className="text-2xl italic">Frank Sinatra</h2>
                    <p className="text-gray-400">CEO Of Designlab IT</p>
                </div>
                <button className="bg-gray-700 px-6 py-3 rounded-lg text-white hover:bg-gray-600">MORE ABOUT</button>
            </div>
            
        </div>
    );
}

export default About;
