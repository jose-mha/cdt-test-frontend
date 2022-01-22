import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Header from '../components/Header';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

import './App.css';

import Product from '../components/Product';

function AppUI() {
  return (
    <React.Fragment>
      <Header />
      <section className="w-auto h-screen">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/products" element={<Product />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </section>
    </React.Fragment>
  );
}

export default AppUI;
