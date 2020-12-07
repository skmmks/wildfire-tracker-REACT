import React from 'react';
import Map from './components/Map';

function App() {
  return (
    <div>
      {process.env.REACT_APP_SECRET_KEY}
      <h1>Welcome to the App</h1>
      <Map />
    </div>
  );
}

export default App;
