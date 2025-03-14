import React, { createContext, useState, useMemo } from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

// Создаем контекст для темы
export const ThemeContext = createContext();

const ThemeProviderWrapper = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: isDarkMode ? 'dark' : 'light',
          primary: {
            main: isDarkMode ? '#90caf9' : '#1976d2',
          },
          secondary: {
            main: isDarkMode ? '#f48fb1' : '#dc004e',
          },
        },
      }),
    [isDarkMode]
  );

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProviderWrapper;
