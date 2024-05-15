import React, { useState } from 'react';

const HomePage = () => {
    const [input , setInput]= useState("");
  return (
    <div>
      <div>
        <input type='text' placeholder='Enter your name...'/>
        <button>Join</button>
      </div>
    </div>
  );
};

export default HomePage;
