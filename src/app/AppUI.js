import React from 'react';

import Modal from '../components/Modal';
import Header from '../components/Header';
import AppRoutes from '../routes/AppRoutes';

import { AppContext } from './context';

import './App.css';
import ProductForm from '../components/ProductForm';

function AppUI() {
  const { openModal, isNew, product } = React.useContext(AppContext);

  return (
    <React.Fragment>
      <div>
        <Header />
        <section className="w-auto h-screen">
          <AppRoutes />
        </section>

        {!!openModal && (
          <Modal>
            <ProductForm product={product} edit={isNew} />
          </Modal>
        )}
      </div>
    </React.Fragment>
  );
}

export default AppUI;
