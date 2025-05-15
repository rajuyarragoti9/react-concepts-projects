import React, { useRef } from 'react';
import './App.css';

function App() {
  const inputRef=useRef(null);
  const handleFocus = () =>{
    inputRef.current.focus();
  }
  return (
  
    <div className="App">
      <h1>useRef Hook Example</h1>
      <input ref={inputRef} type='text' placeholder='Type Something ...' />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}

export default App;
