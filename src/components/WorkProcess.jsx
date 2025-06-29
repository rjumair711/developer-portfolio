import React from 'react';

const WorkProcess = () => {
  return (
    <div className="bg-neutral-900 -mt-19 h-full rounded-3xl w-[98%] sm:ml-2 px-4 sm:px-6 lg:px-8 flex flex-col items-center mt-5">
      {/* Heading + Button */}
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-center md:justify-start space-y-8 md:space-y-0 md:space-x-12 mt-14">
        <div className="flex items-center justify-center">
          <i className="fas fa-arrow-down text-white border border-white rounded-full h-10 w-10 flex items-center justify-center p-3 relative"></i>
          <button className="border border-white text-white px-4 py-2 rounded-full hover:bg-gray-800 transition duration-300 ease-in-out">
            Why Choose me
          </button>
        </div>
        <h1 className="ml-22 text-4xl text-white sm:text-5xl lg:text-7xl font-bold text-center md:text-left">
          My Work Process
        </h1>
      </div>

      {/* Cards */}
      <div className="mt-20 w-full max-w-5xl mx-auto px-2 sm:px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-6 relative -top-6">
        {/* Discovery Card */}
        <div className="bg-black text-white p-8 rounded-3xl shadow-lg flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300 cursor-pointer">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl bg-blue-200 px-8 py-1 rounded-full text-black">Discovery</h3>
            <a href="#" className="text-gray-400 hover:text-white flex items-center space-x-2 transition-colors duration-200">
              <i className="fas fa-arrow-right text-white"></i>
              <span className="text-white underline">Read More</span>
            </a>
          </div>
          <p className="text-gray-400 text-base">
            We start every new client interaction with an in-depth discovery call where we get to know each other, discuss your current and future objectives, and recommend the best course of action.
          </p>
        </div>

        {/* Strategy Card */}
        <div className="bg-lime-400 text-black p-8 rounded-3xl transform rotate-2 shadow-lg flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300 cursor-pointer">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl bg-black px-8 py-1 rounded-full text-white">Strategy</h3>
            <a href="#" className="text-gray-700 hover:text-black flex items-center space-x-2 transition-colors duration-200">
              <i className="fas fa-arrow-right text-black"></i>
              <span className="text-black underline">Read More</span>
            </a>
          </div>
          <p className="text-black text-base">
            Every end-to-end project of ours begins with a bespoke pre-build strategy. From brand ID consultation to in-depth code reviews we’re here to set the stage for success.
          </p>
        </div>

        {/* Design Card */}
        <div className="bg-black text-white p-8 rounded-3xl shadow-lg flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300 cursor-pointer">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl bg-blue-200 px-8 py-1 rounded-full text-black">Design</h3>
            <a href="#" className="text-gray-400 hover:text-white flex items-center space-x-2 transition-colors duration-200">
              <i className="fas fa-arrow-right text-white"></i>
              <span className="text-white underline">Read More</span>
            </a>
          </div>
          <p className="text-gray-400 text-base">
            After we have a comprehensive understanding of your brand, we will be ready to move onto design. Each page will be designed, reviewed, and approved by you.
          </p>
        </div>

        {/* Build Card */}
        <div className="bg-black text-white p-8 rounded-3xl shadow-lg flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300 cursor-pointer">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl bg-blue-200 px-8 py-1 rounded-full text-black">Build</h3>
            <a href="#" className="text-gray-400 hover:text-white flex items-center space-x-2 transition-colors duration-200">
              <i className="fas fa-arrow-right text-white"></i>
              <span className="text-white underline">Read More</span>
            </a>
          </div>
          <p className="text-gray-400 text-base">
            Whether weve just finished designing your new site or youre handing off finished designs, were here to apply our trusted development process to your project.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
