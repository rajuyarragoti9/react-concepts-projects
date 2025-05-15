
import React from 'react';
import {useTheme} from './ThemeContext';
import ThemeToggle from './ThemeToggle';
import './App.css';

function App() {
  const {theme}=useTheme();
  return (
    <div className={`App ${theme}`}>
      <h1> Use Theme Switcher </h1>
      <p>Click the button below to toggle the theme</p>
      <ThemeToggle />
    </div>
  );
}

export default App;
