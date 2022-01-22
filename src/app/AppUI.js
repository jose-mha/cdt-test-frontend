import React from 'react';
import Header from '../components/Header';
import './App.css';
import background from '../assets/office.jpg';

function AppUI() {
  return (
    <React.Fragment>
      <section className="w-auto h-screen">
        <Header />

        <div className="w-full h-screen">
          <div id="home">
            <div className="w-full h-3/4">
              <div className="w-full h-full">
                <img src={background} alt="background" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default AppUI;
