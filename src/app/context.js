import React from 'react';

const AppContext = React.createContext();

function AppProvider({ children }) {
  const [openModal, setOpenModal] = React.useState(false);
  const [isNew, setIsNew] = React.useState(false);
  const [product, setProduct] = React.useState({});

  return (
    <AppContext.Provider
      value={{
        openModal,
        setOpenModal,
        isNew,
        setIsNew,
        product,
        setProduct,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };
