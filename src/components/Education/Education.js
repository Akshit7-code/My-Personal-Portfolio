import React, { useEffect, useState } from 'react';
import './education.css';

function Education() {
  const [bgColor, setBgColor] = useState("bg-red-500"); // Default color

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Change color based on scroll position
      if (scrollPosition < 200) {
        setBgColor("bg-red-500");
      } else if (scrollPosition >= 200 && scrollPosition < 400) {
        setBgColor("bg-blue-500");
      } else if (scrollPosition >= 400) {
        setBgColor("bg-green-500");
      }
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Cleanup event listener on unmount
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to handle hover events
  const handleHover = (color) => {
    setBgColor(color);
  };

  return (
    <div className="bg-[#222222] min-h-screen text-white p-8 font-sans">
      <h1 className="text-2xl font-bold mb-6 text-center">WORK PARTICIPATION</h1>
      <p className="text-base mb-8 text-center">
        Obviously it’s a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.
      </p>

      <div className="max-w-4xl mx-auto relative">
        <div style={{ backgroundColor: 'transparent' }}>
          <div className='linedots1 w-0.5 bg-gray-500'></div>
          <div className='linedots2 w-0.5 bg-gray-500'></div>
          <div className='linedots3 w-0.5 bg-gray-500'></div>
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-500 linedivider">
            <div className={`innerline w-full h-40 transition-all duration-500 ${bgColor}`} />
          </div>

          {/* Web Developer Experience (Left Side) */}
          <div
            className='maindiv'
            onMouseEnter={() => handleHover("bg-purple-500")} // Change color on hover
            onMouseLeave={() => handleHover("bg-red-500")} // Revert color on mouse leave
          >
            <div className="bg-[#333333] p-6 rounded-lg shadow-lg mb-8 w-[45%] relative left-0">
              <h2 className="text-xl font-semibold mb-2">2015 - 2018</h2>
              <h3 className="text-lg font-medium mb-1">Web Developer</h3>
              <p className="text-sm mb-2">Open: 16Messages</p>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Oma lorem ipsum vel machete fucollore. Donec sedere et unus cuore quam dolor sit amet.
              </p>
            </div>
            <div className='date'>
              <h2 className="text-xl font-semibold mb-2">2015 - 2018</h2>
            </div>
          </div>

          {/* Graphic Designer Experience (Right Side) */}
          <div
            className='maindiv'
            onMouseEnter={() => handleHover("bg-yellow-500")} // Change color on hover
            onMouseLeave={() => handleHover("bg-blue-500")} // Revert color on mouse leave
          >
            <div className="bg-[#333333] p-6 rounded-lg shadow-lg mb-8 w-[45%] relative left-[55%]">
              <h2 className="text-xl font-semibold mb-2">2017 - 2019</h2>
              <h3 className="text-lg font-medium mb-1">Graphic Designer</h3>
              <p className="text-sm mb-2">Educationle - Home</p>
              <p className="text-sm">
                I nascetur adhurge fixe eforto magnitudin viscipull tempor ut non-dimentum nec veniam dici. Oma nostra natura puritatibus est magna da pariaturat incertum, trascatur ridiculata muta. Donec quam felix.
              </p>
            </div>
            <div className='date2'>
              <h2 className="text-xl font-semibold mb-2">2017 - 2019</h2>
            </div>
          </div>

          {/* Web Developer Experience (Left Side) */}
          <div
            className='maindiv'
            onMouseEnter={() => handleHover("bg-pink-500")} // Change color on hover
            onMouseLeave={() => handleHover("bg-green-500")} // Revert color on mouse leave
          >
            <div className="bg-[#333333] p-6 rounded-lg shadow-lg mb-8 w-[45%] relative left-0">
              <h2 className="text-xl font-semibold mb-2">2015 - 2018</h2>
              <h3 className="text-lg font-medium mb-1">Web Developer</h3>
              <p className="text-sm mb-2">Open: 16Messages</p>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Oma lorem ipsum vel machete fucollore. Donec sedere et unus cuore quam dolor sit amet.
              </p>
            </div>
            <div className='date'>
              <h2 className="text-xl font-semibold mb-2">2015 - 2018</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;