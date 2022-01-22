import React from 'react';

function Header() {
  return (
    <nav className="hidden lg:flex w-full h-14 bg-white justify-between p-4 dark:bg-gray-800">
      <div className="w-auto h-auto">
        <p className="font-black text-principal text-lg  dark:text-white">Credit Quotation</p>
      </div>
      <div className=" flex flex-row space-x-10">
        <a href="#home" className="font-bold text-principal dark:text-white">
          Inicio
        </a>
        <a href="#recomendados" className="font-bold text-principal dark:text-white">
          Productos
        </a>
        <a href="#rentas_destacadas" className="font-bold text-principal dark:text-white">
          Plazos
        </a>
        <a href="#faqs" className="font-bold text-principal dark:text-white">
          Créditos
        </a>
        <a href="#nosotros" className="font-bold text-principal dark:text-white">
          Acerca de
        </a>
      </div>
    </nav>
  );
}

export default Header;
