import React from 'react';

const Homepage = () => {
  return (
    <div
      className="min-h-screen font-inter flex flex-col justify-center items-center py-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ color: 'var(--text-color)' }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between w-full z-10">

        {/* Left Social Section */}
        <div
          className="hidden lg:flex flex-col items-center space-y-4 mr-8"
          style={{ color: 'var(--text-color)' }}
        >
          <p className="text-sm rotate-270 -ml-16 mb-16 relative top-[212px] left-12 font-bold" style={{ color: 'var(--text-color)' }}>
            @williamrey
          </p>

          <div className="flex flex-col space-y-2 mt-20 relative left-[72px]">
            {['twitter', 'instagram', 'facebook-f'].map((icon) => (
              <a
                key={icon}
                href="#"
                style={{ color: 'var(--text-color)', transition: 'color 0.3s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--action-btn-text)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-color)')}
              >
                <i className={`fab fa-${icon} text-xl`}></i>
              </a>
            ))}
          </div>

          <div
            className="relative left-[66px] top-2 w-px h-10 mb-4"
            style={{ backgroundColor: 'var(--text-color)' }}
          ></div>
        </div>

        {/* Center Content */}
        <div className="flex-grow text-center md:text-left">
          <h1
            className="text-4xl bottom-12 relative sm:text-5xl lg:text-6xl font-bold mb-6 mt-10 md:mt-0 leading-[1.7]"
            style={{ color: 'var(--text-color)' }}
          >
            Trusted{' '}
            <span
              style={{
                backgroundColor: 'var(--text-color)',
                color: 'var(--bg-color)',
                padding: '0.25rem 0.75rem',
                borderRadius: '1rem',
              }}
            >
              Partner
            </span>{' '}
            for
            <br className="hidden sm:block" /> Your Website{' '}
            <span
              style={{
                backgroundColor: 'var(--text-color)',
                color: 'var(--bg-color)',
                padding: '0.25rem 0.75rem',
                borderRadius: '1rem',
              }}
            >
              Develop.
            </span>
          </h1>

          <p
            className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto text-left"
            style={{ color: 'var(--text-color)', opacity: 0.7 }}
          >
            Building the world’s best marketing websites for over a decade.
            <br />
            Your trusted partner for strategy, design, and dev.
          </p>

          <button
            className="flex items-center cursor-pointer justify-center mx-auto md:ml-[268px] font-medium border px-4 py-2 rounded-full transition duration-300 ease-in-out"
            style={{
              borderColor: 'var(--text-color)',
              color: 'var(--text-color)',
              backgroundColor: 'transparent',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = 'var(--action-btn-text)';
              e.currentTarget.style.color = 'var(--action-btn-bg)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'var(--text-color)';
            }}
          >
            <i className="fas fa-arrow-right border-1 rounded-full relative right-4 p-2"></i>
            <span>Schedule a Call</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
