import React from 'react';

function App() {
  return (
    <div>
      {process.env.REACT_APP_SECRET_KEY}
      <h1>Welcome to the App</h1>
    </div>
  );
}

export default App;
