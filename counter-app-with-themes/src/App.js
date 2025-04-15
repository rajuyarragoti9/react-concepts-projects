import Recat,{useState} from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const toggleTheme=()=>setIsDarkMode(!isDarkMode);

  const increement=()=>setCount(count+1);
  const decrement =()=>setCount(count-1);
  const reset=()=>setCount(0);
  const appStyle={
    backgroundColor : isDarkMode ? "#333" : "#f5f5f5",
    color:isDarkMode? "#f5f5f5":"#333",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <div 
      style={appStyle}
      className={isDarkMode ? "dark-theme" : "light-theme"}
    >
      <h1>Counter App with React Usestate</h1>
      <h2>Count : {count}</h2>
      <div>

        <button onClick={increement}> + </button>
        <button onClick={decrement}> - </button>
        <button onClick={reset}> Reset </button>

      </div>
      <br />
      <button onClick={toggleTheme}>
        Switch to { isDarkMode ? "light ":"Dark"} Mode
      </button>
    </div>
  );
}

export default App;
