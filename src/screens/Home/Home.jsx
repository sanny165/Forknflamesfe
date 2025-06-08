import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <h2>Welcome to Fork & Flame</h2>
        <p>
          Savor the flavor, embrace the fire.
          Where every dish tells a story and every moment becomes a memory.
          Reserve your table or host your next unforgettable celebration today!
        </p>
        <div className="home-buttons">
          <a href="/book"><button>Book a Table</button></a>
          <a href="/special-events"><button>Special Events</button></a>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
