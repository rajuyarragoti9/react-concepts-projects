import React, { useState, useMemo } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(1);
  const [darkMode, setDarkMode] = useState(false);

  const factorial = useMemo(() => {
    console.log("Calculating Facorial....");
    return calculateFactorial(number);
  }, [number]);
  function calculateFactorial(n) {
    if (n < 0 || n === 0) {
      return -1;
    }
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }

  const themeStyles = {
    backgroundColor: darkMode ? "#333" : "#fff",
    color: darkMode ? "#fff" : "#000",
    padding: "2rem",
    minHeight: "100vh",
    textAlign: "center",
    transition: "0.3s",
  };
  return (
    <div style={themeStyles}>
      <h1>useMemo Hook Example</h1>
      <div className="input-group">
        <label>Enter a number : </label>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
      </div>
      <h2> Factorial : {factorial}</h2>
      <button onClick={()=>setDarkMode(!darkMode)}>
        Toggle Theme
      </button>
    </div>
  );
}

export default App;
