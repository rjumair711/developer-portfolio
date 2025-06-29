import React from 'react';

const Footer = () => {
  return (
    <div
      className="min-h-screen w-[98%] ml-3 rounded-3xl font-inter py-20 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center"
      style={{ backgroundColor: 'var(--footer-bg)', color: 'var(--footer-text)' }}
    >
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center md:items-start justify-between mb-20">
        <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-between">
          <div className="w-full md:w-auto flex justify-center md:justify-start mb-8 md:mb-0">
            <div
              className="text-3xl font-bold"
              style={{ color: 'var(--color-lime)' }}
            >
              DEVLOP.ME
            </div>
          </div>

          <div
            className="w-full md:w-auto flex justify-center md:justify-end relative"
            style={{ left: 'calc(var(--space-lg) * -6)', top: 'calc(var(--space-md) * -2)' }}
          >
            <h1
              className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-center md:text-right"
              style={{ color: 'var(--footer-text)' }}
            >
              As you can
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 text-center md:text-left mt-12" style={{ marginLeft: 'var(--space-lg)' }}>
        <div className="flex flex-col space-y-8 space-x-8">
          <div>
            <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--footer-subtitle)' }}>
              Say hello
            </h3>
            <ul className="space-y-2" style={{ color: 'var(--footer-text)' }}>
              <li>
                <a href="mailto:HELLO@DEVLOP.ME.COM" className="hover:text-white transition-colors duration-200" style={{ color: 'var(--footer-link)' }}>
                  HELLO@DEVLOP.ME.COM
                </a>
              </li>
              <li>
                <a href="mailto:MAHBUBUL@ME.COM" className="hover:text-white transition-colors duration-200" style={{ color: 'var(--footer-link)' }}>
                  MAHBUBUL@ME.COM
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--footer-subtitle)' }}>
              Call
            </h3>
            <ul className="space-y-2" style={{ color: 'var(--footer-text)' }}>
              <li>
                <a href="tel:+784549498100" className="hover:text-white transition-colors duration-200" style={{ color: 'var(--footer-link)' }}>
                  +784549 4981 00
                </a>
              </li>
              <li>
                <a href="tel:+88450100211" className="hover:text-white transition-colors duration-200" style={{ color: 'var(--footer-link)' }}>
                  +8845 0100 211
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--footer-subtitle)' }}>
            Menu
          </h3>
          <ul className="space-y-2" style={{ color: 'var(--footer-text)' }}>
            {['HOME', 'ABOUT', 'PORTFOLIO', 'BLOG'].map(item => (
              <li key={item}>
                <a href="#" className="hover:text-white transition-colors duration-200" style={{ color: 'var(--footer-link)' }}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--footer-subtitle)' }}>
            Social
          </h3>
          <ul className="space-y-2" style={{ color: 'var(--footer-text)' }}>
            {['TWITTER', 'INSTAGRAM', 'FACEBOOK', 'BEHANCE', 'DRIBBBLE'].map(item => (
              <li key={item}>
                <a href="#" className="hover:text-white transition-colors duration-200" style={{ color: 'var(--footer-link)' }}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className="w-full max-w-7xl mt-20 pt-8 flex flex-col sm:flex-row items-center justify-between text-sm space-y-4 sm:space-y-0"
        style={{ color: 'var(--footer-muted)' }}
      >
        <h1 className="font-bold" style={{ color: 'var(--footer-text)' }}>
          BESNIK
        </h1>
        <p>&copy; devlop.me 2022</p>
        <p>PRIVACY - TERMS</p>
      </div>
    </div>
  );
};

export default Footer;
