import React from 'react';
import background from '../assets/office.jpg';

function Home() {
  return (
    <div className="w-full h-screen">
      <div id="home">
        <div className="w-full h-3/4">
          <div className="w-full h-full">
            <img src={background} alt="background" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
