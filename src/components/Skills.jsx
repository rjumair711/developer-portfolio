import React from 'react';

const Skills = () => {
  return (
    <div
      style={{
        boxShadow: 'inset -10px 0 15px -5px rgba(0, 0, 0, 0.8)',
      }}
      className="rounded-4xl w-[98%] ml-2 bg-black text-white font-inter py-12 px-6 sm:px-8 lg:px-12 relative overflow-hidden flex flex-col justify-start items-center"
    >
      <div className="mb-[180px] max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Section */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="flex items-center justify-center mb-6">
            <i className="fas fa-arrow-down text-white border border-white rounded-full h-10 w-10 flex items-center justify-center p-3"></i>
            <button className="border border-white text-white px-4 py-2 rounded-full hover:bg-gray-800 transition duration-300 ease-in-out">
              Why Choose me
            </button>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-sans leading-tight">
            My Extensive
            <br /> List of Skills
          </h1>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center lg:items-end text-center lg:text-right space-y-8">
          <p className="text-lg sm:text-xl text-gray-300 max-w-[90vw] sm:max-w-md lg:max-w-xl">
            Building the worlds best marketing. Your trusted partner for strategy, design, and dev.
          </p>

          <div className="w-full max-w-xl h-px bg-gray-600 my-4"></div>

          <div className="flex space-x-4">
            <button className="flex items-center justify-center border border-white text-white w-12 h-12 rounded-full hover:bg-gray-800 transition duration-300 ease-in-out">
              <i className="fas fa-arrow-left"></i>
            </button>
            <button className="flex items-center justify-center border border-white text-white w-12 h-12 rounded-full hover:bg-gray-800 transition duration-300 ease-in-out">
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Skill Cards */}
      <div className="mt-2 relative bottom-8 w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {/* HTML & CSS */}
        <div
          style={{
            backgroundImage: `url('/src/assets/icon_1.png')`,
            backgroundPosition: 'left 30px top 20px',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '60px',
          }}
          className="bg-[#252323] cursor-pointer hover:-translate-y-2 transition-transform duration-300 rounded-3xl p-8 flex flex-col text-left mt-2 shadow-lg"
        >
          <h3 className="text-3xl font-bold mb-3 mt-16">HTML & CSS</h3>
          <p className="text-gray-400 text-lg max-w-[90vw] sm:max-w-sm">
            Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis.
          </p>
        </div>

        {/* JavaScript */}
        <div
          style={{
            backgroundImage: `url('/src/assets/icon_1.png')`,
            backgroundPosition: 'left 30px top 20px',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '60px',
          }}
          className="bg-[#252323] cursor-pointer transition-transform duration-300 hover:-translate-y-2
 rounded-3xl p-8 flex flex-col transform rotate-3 text-left mt-2 shadow-lg"
        >
          <h3 className="text-3xl font-bold mb-3 mt-16">JavaScript</h3>
          <p className="text-gray-400 text-lg max-w-[90vw] sm:max-w-sm">
            Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis.
          </p>
        </div>

        {/* Webflow */}
        <div
          style={{
            backgroundImage: `url('/src/assets/icon_1.png')`,
            backgroundPosition: 'left 30px top 20px',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '60px',
          }}
          className="bg-[#252323] transition-transform duration-300 hover:-translate-y-2
cursor-pointer rounded-3xl p-8 flex flex-col text-left mt-2 shadow-lg"
        >
          <h3 className="text-3xl font-bold mb-3 mt-16">Webflow</h3>
          <p className="text-gray-400 text-lg max-w-[90vw] sm:max-w-sm">
            Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
