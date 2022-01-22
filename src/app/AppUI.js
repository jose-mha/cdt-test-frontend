import React from 'react';

import Header from '../components/Header';
import AppRoutes from '../routes/AppRoutes';

import './App.css';

function AppUI() {
  return (
    // <React.Fragment>
    <div>
      <Header />
      <section className="w-auto h-screen">
        <AppRoutes />
      </section>
    </div>
    //</React.Fragment>
  );
}

export default AppUI;
