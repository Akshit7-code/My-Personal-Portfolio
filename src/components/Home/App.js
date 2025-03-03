import React, { useEffect, useState } from 'react';
import { Briefcase, Award, ArrowRight, Github, Linkedin, Twitter, Code, X, Menu, Download } from 'lucide-react';
import './home.css';
function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="maincontainerhero relative bg-gradient-to-br from-[#0F1117] via-[#0C0E13] to-[#08090D] text-white overflow-hidden">
    {/* Enhanced Smooth Blur Effect */}
    <div className="absolute -bottom-10 left-0 w-full h-16 bg-gradient-to-t from-[#0F1117] via-[#0F1117]/20 to-transparent blur-[20px]"></div>
 

      {/* Navigation */}
      <nav className="navbar">
        <div className="flex items-center space-x-2">
          <Code size={28} className="text-indigo-500" />
          <span className="text-2xl font-bold">Alex<span className="text-indigo-500">Dev</span></span>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a href="#" className="hover:text-indigo-400 transition-colors duration-300 border-b-2 border-indigo-500">Home</a>
          <a href="#" className="hover:text-indigo-400 transition-colors duration-300">About</a>
          <a href="#" className="hover:text-indigo-400 transition-colors duration-300">Services</a>
          <a href="#" className="hover:text-indigo-400 transition-colors duration-300">Portfolio</a>
          <a href="#" className="hover:text-indigo-400 transition-colors duration-300">Blog</a>
          <a href="#" className="hover:text-indigo-400 transition-colors duration-300">Contact</a>
        </div>



        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-slate-800 shadow-lg rounded-b-lg p-4 md:hidden z-50 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a href="#" className="hover:text-indigo-400 transition-colors duration-300 border-l-2 border-indigo-500 pl-2">Home</a>
              <a href="#" className="hover:text-indigo-400 transition-colors duration-300 pl-2">About</a>
              <a href="#" className="hover:text-indigo-400 transition-colors duration-300 pl-2">Services</a>
              <a href="#" className="hover:text-indigo-400 transition-colors duration-300 pl-2">Portfolio</a>
              <a href="#" className="hover:text-indigo-400 transition-colors duration-300 pl-2">Blog</a>
              <a href="#" className="hover:text-indigo-400 transition-colors duration-300 pl-2">Contact</a>
              <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-full flex items-center justify-center space-x-2 transition-all duration-300">
                <span>Resume</span>
                <Download size={16} />
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="container container11">
        {/* Left Content */}
        <div className={`md:w-1/2 z-10 mainrightdiv transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
          <div className="relative ">
            <h2 className="text-indigo-400 text-2xl font-medium mb-2 animate-float">Hello, I'm</h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 relative">
              <span className="inline text-gradient-blue-purple">Akshit</span>
              <span className="ml-5 inline text-white">Thakur<span className="text-indigo-500">.</span></span>
              {/* <div className="absolute -left-4 -top-4 w-12 h-12 border-t-2 border-l-2 border-indigo-500 animate-border-pulse"></div>
              <div className="absolute -right-4 -bottom-4 w-12 h-12 border-b-2 border-r-2 border-indigo-500 animate-border-pulse delay-300"></div> */}
            </h1>
            <h3 className="text-2xl md:text-3xl font-medium text-gradient-indigo-purple mb-6 animate-float delay-100">
              Full Stack Developer
            </h3>
            <p className="text-gray-300 mb-8 max-w-lg leading-relaxed">
              I create exceptional digital experiences that combine stunning design with powerful functionality. Let's build something amazing together.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-full flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/30 group">
                <span>Hire Me</span>
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button className="relative overflow-hidden border-2 border-indigo-400 hover:border-indigo-500 hover:text-indigo-400 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 group">
                <span className="relative z-10">My Work</span>
                <span className="absolute inset-0 bg-indigo-500/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </button>
            </div>

            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-all duration-300 transform hover:scale-110">
                <Github size={24} className="hover:animate-spin-slow" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-all duration-300 transform hover:scale-110">
                <Linkedin size={24} className="hover:animate-spin-slow" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-all duration-300 transform hover:scale-110">
                <Twitter size={24} className="hover:animate-spin-slow" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className={` imagerightcon md:w-1/2 md:mt-0 relative z-10 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
          <div className="relative w-full mx-auto">
            {/* Main circular image */}
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-indigo-500 mx-auto relative z-10 shadow-xl shadow-indigo-500/20 animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                alt="Profile"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border-4 border-indigo-500 rounded-full animate-pulse-ring"></div>
            </div>

            {/* Orbiting skill badges */}
            <div className="absolute reactbox">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-white updownclass text-black p-3 rounded-lg shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer" style={{ animationDelay: '1s' }}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-10 h-10" />
                </div>
              </div>
            </div>

            <div className="absolute typescriptbox ">
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                <div className="bg-white updownclass text-black p-3 rounded-lg shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer" style={{ animationDelay: '0.75s' }}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-10 h-10" />
                </div>
              </div>
            </div>

            <div className="absolute nodebox">
              <div className="absolute top-40 right-20 transform translate-x-1/2 -translate-y-1/2">
                <div className="bg-white updownclass text-black p-3 rounded-lg shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer" style={{ animationDelay: '0.5s' }}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-10 h-10" />
                </div>
              </div>
            </div>

            <div className="absolute tailwindbox ">
              <div className="absolute top-20 left-28 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-white updownclass text-black p-3 rounded-lg shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer" style={{ animationDelay: '1.5s' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="45" height="45" viewBox="0 0 48 48">
                    <path fill="#00acc1" d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z"></path>
                  </svg>
                </div>
              </div>
            </div>

            {/* Stats card */}
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-slate-800/90 to-slate-900/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-indigo-500/30 flex items-center space-x-4 hover:shadow-indigo-500/20 hover:border-indigo-500/50 transition-all duration-300 cursor-pointer animate-float" style={{ animationDelay: '0.2s', zIndex: 20 }}>
              <div className="bg-indigo-500/20 p-3 rounded-full">
                <Award className="text-indigo-400 w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
            </div>

            {/* Experience card */}
            <div className="absolute fiveyear transform -translate-x-1/2 bg-gradient-to-r from-slate-800/90 to-slate-900/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-indigo-500/30 flex items-center space-x-4 hover:shadow-indigo-500/20 hover:border-indigo-500/50 transition-all duration-300 cursor-pointer animate-float" style={{ animationDelay: '0.4s', zIndex: 20 }}>
              <div className="bg-purple-500/20 p-3 rounded-full">
                <Briefcase className="text-purple-400 w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-bold">5+ Years</div>
                <div className="text-sm text-gray-400">Experience</div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-500/10 rounded-full filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/10 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

          {/* Particle effect */}
          <div className="particles">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="particle bg-white rounded-full absolute"
                style={{
                  width: `${Math.random() * 5 + 1}px`,
                  height: `${Math.random() * 5 + 1}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.5 + 0.1,
                  animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;