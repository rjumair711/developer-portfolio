import React from 'react';

const Experience = () => {
  return (
    <div
      className="min-h-screen font-inter flex flex-col justify-center items-center py-20 px-4 -mt-16 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        color: 'var(--text-color)',
        backgroundColor: 'var(--bg-color)',
        transition: 'background-color 0.3s, color 0.3s',
      }}
    >
      {/* Arrow & About button */}
      <div
        className="flex items-center justify-end w-full mr-10 sm:mr-[220px] md:mr-[470px] mt-2 relative top-12"
        style={{ color: 'var(--text-color)' }}
      >
        <i
          className="fas fa-arrow-down border-2 rounded-full h-10 w-10 flex items-center justify-center p-3"
          style={{
            color: 'var(--text-color)',
            borderColor: 'var(--text-color)',
            transition: 'color 0.3s, border-color 0.3s',
          }}
        ></i>
        <button
          className="font-bold px-6 py-2 rounded-full cursor-pointer transition duration-300 ease-in-out ml-4 hover:bg-amber-300"
          style={{
            color: 'var(--text-color)',
            border: '2px solid var(--text-color)',
            backgroundColor: 'transparent',
            transition: 'color 0.3s, border-color 0.3s, background-color 0.3s',
          }}
        >
          About
        </button>
      </div>

      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center z-10 mt-30">
        <h1
          className="text-4xl bottom-12 relative sm:text-5xl lg:text-7xl font-bold mb-6 mt-10 md:mt-0 leading-[1.7]"
          style={{ color: 'var(--text-color)', transition: 'color 0.3s' }}
        >
          I have been{' '}
          <span
            className="px-3 py-1 rounded-2xl"
            style={{
              backgroundColor: 'var(--text-color)',
              color: 'var(--bg-color)',
              transition: 'background-color 0.3s, color 0.3s',
            }}
          >
            Developing
          </span>
          <br className="hidden sm:block" /> Websites since{' '}
          <span
            className="px-3 py-1 rounded-2xl"
            style={{
              backgroundColor: 'var(--text-color)',
              color: 'var(--bg-color)',
              transition: 'background-color 0.3s, color 0.3s',
            }}
          >
            2013.
          </span>
        </h1>
        <p
          className="text-lg sm:text-xl max-w-2xl mx-auto font-sans"
          style={{ color: 'var(--text-color)', opacity: 0.7, transition: 'color 0.3s' }}
        >
          We start every new client interaction with an in-depth discovery call where we get
          to know each other and recommend the best course of action.
        </p>
      </div>

      {/* Tag Section */}
      <div
        className="mt-20 w-full max-w-6xl flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between px-4"
        style={{ color: 'var(--text-color)' }}
      >
        {/* Left heading */}
        <div className="text-center md:text-justify mb-8 md:mb-0 md:mr-12">
          <h2
            className="text-2xl sm:text-3xl font-medium whitespace-nowrap"
            style={{ color: 'var(--text-color)', transition: 'color 0.3s' }}
          >
            PREVIOUSLY <br /> WORKED ON
          </h2>
        </div>

        {/* Right tags */}
        <div className="flex flex-wrap h-full justify-center md:justify-end md:gap-x-2 md:gap-y-6 relative mr-2 sm:mr-4 md:mr-10 lg:-left-30">
          {/* Tag 1 */}
          <div
            className="px-5 sm:px-6 md:px-7 text-base sm:text-lg md:text-2xl py-3 sm:py-4 md:py-5 rounded-full shadow-lg transform rotate-6 relative z-10 top-[8px] left-[20px] sm:top-[12px] sm:left-[80px] md:top-[8px] md:left-[160px]"
            style={{
              backgroundColor: 'var(--text-color)',
              color: 'var(--bg-color)',
              transition: 'background-color 0.3s, color 0.3s',
            }}
          >
            awwwwards.
          </div>

          {/* Tag 2 */}
          <div
            className="border-2 text-base sm:text-lg md:text-2xl p-3 sm:p-4 rounded-full relative top-[60px] -left-[150px] sm:top-[64px] sm:left-[24px] md:top-[80px] md:left-[-80px]"
            style={{
              borderColor: 'var(--text-color)',
              color: 'var(--text-color)',
              transition: 'color 0.3s, border-color 0.3s',
            }}
          >
            CSS WINNER
          </div>

          {/* Tag 3 */}
          <div
            className="border-2 text-base sm:text-lg md:text-2xl font-bold p-3 sm:p-4 rounded-full transform -rotate-6 sm:-rotate-8 relative top-[67px] -left-[25px] sm:top-[70px] sm:left-[30px] md:top-[72px] md:left-[-72px] z-0"
            style={{
              borderColor: 'var(--text-color)',
              color: 'var(--text-color)',
              transition: 'color 0.3s, border-color 0.3s',
            }}
          >
            /thoughtworks
          </div>

          {/* Tag 4 */}
          <div
            className="border-2 text-base sm:text-lg md:text-2xl py-3 sm:py-4 px-6 sm:px-8 md:px-10 rounded-full relative z-10 top-[10px] left-[-40px] sm:top-[12px] sm:left-[-48px] md:top-[-8px] md:left-[-144px] font-bold"
            style={{
              borderColor: 'var(--text-color)',
              color: 'var(--text-color)',
              transition: 'color 0.3s, border-color 0.3s',
            }}
          >
            facebook
          </div>

          {/* Tag 5 */}
          <div
            className="border-2 text-base sm:text-lg md:text-2xl py-3 sm:py-4 px-6 sm:px-8 md:px-10 rounded-full transform rotate-6 sm:rotate-9 relative top-[10px] left-[80px] sm:top-[-40px] sm:left-[96px] md:top-[-57px] md:left-[403px] flex items-center"
            style={{
              borderColor: 'var(--text-color)',
              color: 'var(--text-color)',
              transition: 'color 0.3s, border-color 0.3s',
            }}
          >
            <img
              src="https://placehold.co/20x20/000000/FFFFFF?text=S"
              alt="CSS Design Awards Logo"
              className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
            />
            CSS <span className="font-bold ml-1">Design</span> Awards
          </div>

          {/* Tag 6 */}
          <div
            className="border-2 text-base sm:text-lg md:text-2xl py-3 sm:py-4 px-6 sm:px-8 md:px-10 font-bold rounded-full relative z-0 top-[8px] left-[10px] sm:top-[16px] sm:left-[40px] md:top-[4px] md:left-[-8px] flex items-center"
            style={{
              borderColor: 'var(--text-color)',
              color: 'var(--text-color)',
              transition: 'color 0.3s, border-color 0.3s',
            }}
          >
            <img
              src="https://placehold.co/20x20/000000/FFFFFF?text=A"
              alt="Autodesk Logo"
              className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
            />
            AUTODESK
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
