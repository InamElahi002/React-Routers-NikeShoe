import React, { useState } from 'react';

function Home() {
  const [num, setNum] = useState("ali");

  function changeNum() {
    setNum("raza");
  }

  return (
    <div>
      <h1>i am Hone page</h1>
      <p>You are wrong here, my boys.</p>

      <input 
        type="text" 
        placeholder="Enter your first name" required value={num} onChange={(e) => setNum(e.target.value)} 
      />

      <button onClick={changeNum}>Click Me</button>
    </div>
  );
}

export default Home;
