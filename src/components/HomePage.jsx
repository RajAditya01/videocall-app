import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>Welcome to VideoCall App</h1>
      <p>This is the landing page of our application.</p>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/videos">Videos</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
