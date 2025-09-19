import React, { useState, useEffect, useCallback, memo } from "react";
import "./App.css";

const ThemeButton = memo(({ toggleTheme }) => {
  console.log("Button Re-rendered");
  return <button onClick={toggleTheme}>Toggle Theme</button>;
});
function App() {
  // Initialize state with the theme from localStorage (or default to light theme)
  const [isDarkTheme, setIsDarkTheme] = useState(
    localStorage.getItem("theme") === "dark"
  );
  //Update localstorage whenever the theme changes
  useEffect(() => {
    localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
  }, [isDarkTheme]);
  //Function to toggle the theme4
  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };
  //Dynamic styles bases on the theme
  const themeStyles = {
    backgroundColor: isDarkTheme ? "#333" : "#fff",
    color: isDarkTheme ? "#fff" : "#333",
    height: "100vh",
    padding: "20px",
  };
  return (
    <>
      <div style={themeStyles}>
        <h1>{isDarkTheme ? "DarkTheme" : "Light Theme"}</h1>
        <ThemeButton toggleTheme={toggleTheme} />
      </div>
    </>
  );
}

export default App;
