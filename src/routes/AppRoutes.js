import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Products from '../pages/Products';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default AppRoutes;
