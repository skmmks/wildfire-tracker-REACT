import React from 'react';
import { useState, useEffect } from 'react';
import Map from './components/Map';

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch('');
    };
  });

  return (
    <div>
      <h1>Welcome to the App</h1>
      <Map />
    </div>
  );
}

export default App;
