import React, { useState, useEffect } from "react";
import "./navbar.css";
import { Menu, X, Code } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["home", "about", "services", "Education", "Projects", "contact"];
      let currentSection = "home";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const sectionTop = element.offsetTop;
          const sectionHeight = element.clientHeight;

          if (window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight - 100) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scrolling function
  const handleSmoothScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 30, // Adjust to prevent content from hiding under navbar
        behavior: "smooth",
      });
      setMobileMenuOpen(false); // Close mobile menu after click
    }
  };

  return (
    <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-7xl">
      <div
        className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 mt-2 ${
          isScrolled ? "bg-opacity-80 backdrop-blur-md " : "bg-transparent"
        }`}
      >
        {/* Left Side: Logo */}
        <div className="flex items-center space-x-2">
          <Code size={28} className="text-indigo-500" />
          <span className="text-2xl font-bold">
          Folio<span className="text-indigo-500">Box</span>
          </span>
        </div>

        {/* Spacer to Push Menu to Right */}
        <div className="flex-1"></div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Right Side: Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {["home", "about", "services", "Education", "Projects", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => handleSmoothScroll(item)}
              className={`hover:text-indigo-400 transition-colors duration-300 px-3 py-2 ${
                activeSection === item ? "border-b-2 border-indigo-500 text-indigo-400" : ""
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-800 text-white flex flex-col items-start py-4 md:hidden">
          {["home", "about", "services", "Education", "Projects", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => handleSmoothScroll(item)}
              className={`relative transition-colors duration-300 px-6 py-2 w-full text-left ${
                activeSection === item ? "text-indigo-400" : "hover:text-indigo-400"
              }`}
            >
              {activeSection === item && (
                <span className="absolute left-2 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-indigo-500 rounded-full"></span>
              )}
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
