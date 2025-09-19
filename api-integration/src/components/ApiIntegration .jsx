import React, { useState, useEffect } from "react";

const API_URL = "https://jsonplaceholder.typicode.com/users"; // Removed <>

const ApiIntegration = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0); // Track retry attempts

  const fetchData = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const result = await response.json();
      setData(result);
      setError(null); // Clear any previous errors
    } catch (error) {
      setError(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // Retry function
  const retry = () => {
    setLoading(true);
    setError(null);
    setRetryCount((prevCount) => prevCount + 1);
  };

  // Fetch data on component mount and whenever retryCount changes
  useEffect(() => {
    fetchData();
  }, [retryCount]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        <p style={{ color: "red" }}>⚠️ Error: {error}</p>
        <button onClick={retry}>Retry</button>
      </div>
    );
  }

  return (
    <div>
      <h1>User Data</h1>
      <table border="1" cellPadding="8" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "#f4f4f4" }}>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.address.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApiIntegration;
