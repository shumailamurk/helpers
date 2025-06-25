import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const themeColors = [
  { label: 'Teal', value: 'rgb(100, 196, 178)' },
  { label: 'Blue', value: 'rgb(59, 130, 246)' },
  { label: 'Purple', value: 'rgb(139, 92, 246)' },
  { label: 'Pink', value: 'rgb(236, 72, 153)' },
  { label: 'Yellow', value: 'rgb(253, 224, 71)' },
];

export const ThemeProvider = ({ children }) => {
  const [color, setColor] = useState(themeColors[0].value);

  // Apply theme color to document root (CSS variable)
  React.useEffect(() => {
    document.documentElement.style.setProperty('--theme-color', color);
    // Convert rgb(x, y, z) to x, y, z for rgba
    const rgb = color.match(/\d+/g);
    if (rgb) {
      document.documentElement.style.setProperty('--theme-color-rgb', rgb.join(','));
    }
  }, [color]);

  return (
    <ThemeContext.Provider value={{ color, setColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext); 