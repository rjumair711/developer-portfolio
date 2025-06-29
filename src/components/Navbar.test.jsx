import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from './Navbar';
import '@testing-library/jest-dom';

// Mock CSS variables for testing
const setCSSVariables = (vars) => {
  Object.entries(vars).forEach(([key, value]) => {
    document.documentElement.style.setProperty(key, value);
  });
};

describe('Navbar Start Project Button', () => {
  beforeEach(() => {
    // Set CSS variables for light mode (border white)
    setCSSVariables({
      '--action-btn-border': '#ffffff',
      '--action-btn-bg': 'transparent',
      '--action-btn-text': '#000000',
      '--text-color': '#000000',
    });
  });

  it('renders Start Project button with correct text and styles', () => {
    render(<Navbar />);

    const startProjectButton = screen.getByRole('button', { name: /start project/i });
    expect(startProjectButton).toBeInTheDocument();

    // Check initial border color style (using computed style from CSS variable)
    const borderColor = getComputedStyle(startProjectButton).borderColor;
    expect(borderColor).toBe('rgb(255, 255, 255)');

    // Check initial background color and text color (transparent and black)
    expect(startProjectButton).toHaveStyle('background-color: transparent');
    expect(startProjectButton).toHaveStyle('color: var(--action-btn-text)');
  });

  it('changes styles on mouse enter and leave', () => {
    render(<Navbar />);
    const startProjectButton = screen.getByRole('button', { name: /start project/i });

    // Simulate mouse enter
    fireEvent.mouseEnter(startProjectButton);
    expect(startProjectButton.style.backgroundColor).toBe('var(--action-btn-text)');
    expect(startProjectButton.style.color).toBe('var(--action-btn-bg)');

    // Simulate mouse leave
    fireEvent.mouseLeave(startProjectButton);
    expect(startProjectButton.style.backgroundColor).toBe('transparent');
    expect(startProjectButton.style.color).toBe('var(--action-btn-text)');
  });
});
