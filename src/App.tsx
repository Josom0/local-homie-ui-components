import React from 'react';
import './App.css';
import { ThemeProvider } from '@heyhomie/homie-ui-external';
import CarouselTest from './Components/Carousel';

function App() {
  return (
    <ThemeProvider theme='Owners2022'>
      <div>
        <h1>Test components</h1>
        <CarouselTest></CarouselTest>
      </div>
    </ThemeProvider>
  );
}

export default App;
