import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    return (
        <nav
            className="p-4"
            style={{ color: 'var(--text-color)' }}  // Removed backgroundColor
        >
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold">DEVLOP.ME</div>

                {/* Mobile menu button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        style={{ color: 'var(--text-color)' }}
                        className="focus:outline-none"
                    >
                        <i className="fas fa-bars text-2xl"></i>
                    </button>
                </div>

                <button
                    onClick={toggleTheme}
                    style={{
                        backgroundColor: 'var(--toggle-btn-bg)',
                        color: 'var(--text-color)',
                        border: '1px solid var(--text-color)',
                    }}
                    className="-ml-80 px-5 py-1 rounded-full transition"
                >
                    {theme === 'dark' ? 'Light' : 'dark'}
                </button>

                {/* Desktop menu */}
                <div className="hidden md:flex space-x-12 items-center mr-3">
                    {['Home', 'About', 'Portfolio', 'Blog'].map((item) => (
                        <a
                            key={item}
                            href="#"
                            className="rounded-md p-2 transition duration-300 ease-in-out font-medium"
                            style={{ color: 'var(--text-color)' }}
                        >
                            {item}
                        </a>
                    ))}
                    <button
                        className="flex items-center cursor-pointer font-medium px-4 py-2 rounded-full transition duration-300 ease-in-out"
                        style={{
                            backgroundColor: 'var(--action-btn-bg)',
                            color: 'var(--text-color)',
                            border: '1px solid var(--action-btn-border)',
                        }}

                    >
                        <i className="fas fa-arrow-right border-1 rounded-full relative right-4 p-2"></i>
                        <span className="right-1 relative">Start Project</span>
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="md:hidden mt-4 space-y-2">
                    {['Home', 'About', 'Portfolio', 'Blog'].map((item) => (
                        <a
                            key={item}
                            href="#"
                            className="block px-4 py-2 rounded-md transition duration-300 ease-in-out"
                            style={{ color: 'var(--text-color)', backgroundColor: 'var(--button-bg)' }}
                        >
                            {item}
                        </a>
                    ))}
                    <button
                        className="mt-4 w-full flex justify-center items-center space-x-2 px-6 py-2 rounded-full transition duration-300 ease-in-out"
                        style={{
                            backgroundColor: 'var(--button-bg)',
                            color: 'var(--text-color)',
                            border: '2px solid var(--text-color)',
                        }}
                    >
                        <i className="fas fa-arrow-right"></i>
                        <span>Start Project</span>
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
