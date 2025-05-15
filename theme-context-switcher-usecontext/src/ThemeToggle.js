import React from 'react';
import { useTheme } from './ThemeContext';

const ThemeToggle = () =>{
    const {theme,toggleTheme}=useTheme();
    return(
        <button className='toggle-btn' onClick={toggleTheme}>
            Switch to {theme === 'light'?'Dark':'Light'} Mode
        </button>
    );
};

export default ThemeToggle;