import React from 'react';

const Contact = () => {
  return (
    <div
      className="w-full px-6 sm:px-12 mt-16 flex flex-col md:flex-row justify-between items-start gap-10"
      style={{
        color: 'var(--text-color)', // general text color
      }}
    >
      {/* Left Side Content */}
      <div className="flex-1">
        {/* Arrow and Button */}
        <div className="flex items-center mb-10">
          <i
            className="fas fa-arrow-down border-2 rounded-full h-10 w-10 flex items-center justify-center p-3"
            style={{
              color: 'var(--text-color)',
              borderColor: 'var(--text-color)',
            }}
          ></i>
          <button
            className="border-2 cursor-pointer px-8 py-2 rounded-full ml-4 transition duration-300 ease-in-out"
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
            Contact
          </button>
        </div>

        {/* Heading & Text */}
        <div className="max-w-3xl text-left">
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6 leading-[1.5]"
            style={{ color: 'var(--text-color)' }}
          >
            Interested in <br className="hidden sm:block" />
            <span
              className="px-3 py-1 rounded-2xl"
              style={{
                backgroundColor: 'var(--text-color)',
                color: 'var(--bg-color)',
              }}
            >
              work
            </span>{' '}
            together?
          </h1>

          <p
            className="text-lg sm:text-xl max-w-xl font-medium ml-1"
            style={{ color: 'var(--text-color)' }}
          >
            We start every new client interaction with an in-depth discovery call where we get
            to know each other and recommend the best course of action.
          </p>

          <button
            className="flex cursor-pointer items-center justify-center mt-8 font-medium border px-4 py-2 rounded-full transition duration-300 ease-in-out"
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
            <i
              className="fas fa-arrow-right border-1 rounded-full relative right-4 p-2"
              style={{ color: 'var(--text-color)' }}
            ></i>
            <span>Schedule a Call</span>
          </button>
        </div>
      </div>

      {/* Right Side Form */}
      <div
        className="w-full md:w-[480px] rounded-3xl p-8 shadow-2xl relative overflow-hidden"
        style={{ backgroundColor: 'var(--card-bg-black)' }}
      >
        <div className="relative z-10 flex flex-col space-y-6">
          {/* Inputs */}
          {['text', 'email'].map(type => (
            <div key={type} className="border-b pb-2" style={{ borderColor: 'var(--border-gray)' }}>
              <input
                type={type}
                placeholder={type === 'text' ? 'Enter your name' : 'Your email address'}
                className="w-full bg-transparent outline-none text-lg py-1"
                style={{
                  color: 'var(--input-text)',
                  caretColor: 'var(--text-color)',
                }}
              />
            </div>
          ))}

          <div className="border-b pb-2" style={{ borderColor: 'var(--border-gray)' }}>
            <textarea
              placeholder="Describe your project"
              rows="1"
              className="w-full bg-transparent outline-none text-lg resize-none"
              style={{
                color: 'var(--input-text)',
                caretColor: 'var(--text-color)',
              }}
            ></textarea>
          </div>

          {/* Form Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
            {/* Send Button */}
            <div className="w-full sm:w-auto flex justify-center relative -top-4">
              <button
                className="flex items-center justify-center mt-8 font-medium border px-3 py-2 rounded-full transition duration-300 ease-in-out"
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
                <i
                  className="fas fa-paper-plane text-sm border-1 rounded-full relative right-3 p-2"
                  style={{ color: 'var(--text-color)', borderColor: 'var(--text-color)' }}
                ></i>
                <span>Schedule a Call</span>
              </button>
            </div>

            {/* OR Separator */}
            <div className="font-medium" style={{ color: 'var(--gray-400)' }}>
              or
            </div>

            {/* Contact Me Button */}
            <div className="w-full sm:w-auto flex justify-center relative -top-4">
              <button
                className="flex items-center justify-center mt-8 font-medium border px-3 py-2 rounded-full transition duration-300 ease-in-out"
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
                <i
                  className="fas fa-envelope text-sm border-1 rounded-full relative right-3 p-2"
                  style={{ color: 'var(--text-color)', borderColor: 'var(--text-color)' }}
                ></i>
                <span>Schedule a Call</span>
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center space-x-6 mt-2 pt-4">
            <span style={{ color: 'var(--gray-400)', marginRight: '2rem' }} className="text-sm">
              @williamrey
            </span>
            <div
              className="w-px h-6"
              style={{
                backgroundColor: 'var(--gray-600)',
                transform: 'rotate(90deg)',
              }}
            ></div>
            {['facebook-f', 'instagram', 'twitter'].map(icon => (
              <a
                key={icon}
                href="#"
                className="transition-colors duration-200 ml-2"
                style={{ color: 'var(--gray-400)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-white)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--gray-400)')}
              >
                <i className={`fab fa-${icon} text-lg`} style={{ color: 'var(--text-white)' }}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
