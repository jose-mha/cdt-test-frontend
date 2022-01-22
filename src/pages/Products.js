import React, { useEffect } from 'react';
import Product from '../components/Product';

import AppService from '../services/AppService';

export default function Products() {
  const [listProducts, setListProducts] = React.useState([]);

  const getDatas = async () => {
    try {
      let response = await AppService.getProducts();

      if (response.status === 200) {
        setListProducts(response.data);
      }
    } catch (error) {
      console.log('Upps, hubo un error al obtener los datos');
    }
  };

  useEffect(() => {
    // console.log('Se ha renderizado el componente');
  }, [listProducts]);

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Productos</h2>
        <button className="button" onClick={() => getDatas()}>
          ESTUDIANTES
        </button>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {listProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
