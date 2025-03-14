import React, { useContext } from 'react';
import { Button } from '@mui/material';
import { ThemeContext } from './ThemeProviderWrapper';

const ThemeToggleButton = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <Button variant="contained" color="primary" onClick={toggleTheme}>
      {isDarkMode ? 'Светлая тема' : 'Тёмная тема'}
    </Button>
  );
};

export default ThemeToggleButton;
