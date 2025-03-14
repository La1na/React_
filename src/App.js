import React from 'react';
import { Typography, Container } from '@mui/material';
import ThemeProviderWrapper from './components/ThemeProviderWrapper';
import ThemeToggleButton from './components/ThemeToggleButton';

function App() {
  return (
    <ThemeProviderWrapper>
      <Container style={{ textAlign: 'center', marginTop: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Переключение темы в React
        </Typography>
        <ThemeToggleButton />
      </Container>
    </ThemeProviderWrapper>
  );
}

export default App;
