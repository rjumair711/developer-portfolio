import React from 'react';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import './index.css'; // if custom CSS is needed
import Skills from './components/Skills';
import Experience from './components/Experience';
import WorkProcess from './components/WorkProcess';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div
      style={{
        backgroundColor: 'var(--bg-color)',
        color: 'var(--text-color)',
        transition: 'background-color 0.3s, color 0.3s',
        fontFamily: 'Inter, sans-serif',
      }}
    >
  
      {/* Homepage + other sections */}
      <div
        className="min-h-screen bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url('/src/assets/wave-bg.png')`,
          color: 'var(--text-color)',
          transition: 'color 0.3s',
        }}
      >
        <Navbar />
        <Homepage />
      </div>

      <Skills />

      <div
        className="min-h-screen bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url('/src/assets/Vector.png')`,
          color: 'var(--text-color)',
          transition: 'color 0.3s',
        }}
      >
        <Experience />
      </div>

      <WorkProcess />

      <div
        className="min-h-screen bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url('/src/assets/Vector_1.png')`,
          backgroundPosition: 'center top -170px',
          color: 'var(--text-color)',
          transition: 'color 0.3s',
        }}
      >
        <Contact />
      </div>

      <div className="mt-12 sm:mt-16">
        <Footer />
      </div>
    </div>
  );
};


export default App;
