import React,{useState,useEffect} from 'react';

import './App.css';

function App() {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    fetch('https://randomuser.me/api')
    .then( response => response.json())
    .then(data=>{
      setUser(data.results[0]);
      setLoading(false);
    })
    .catch(error=>{
      console.error('Error fetching User:',error);
      setLoading(false);
    })
  },[]);
  return (
    <div className="App">
      <h1>👤 Random User Profile</h1>
      {loading?(<p>Loading User data...</p>):(
        user && (
         <div className="user-card">
         <img src={user.picture.large} alt="User" />
         <h2>{user.name.first} {user.name.last}</h2>
         <p><strong>Email:</strong> {user.email}</p>
         <p><strong>Location:</strong> {user.location.city}, {user.location.country}</p>
       </div>
      ))}
    </div>
  );
}

export default App;
