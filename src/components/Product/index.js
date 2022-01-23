import React from 'react';
import { TrashIcon } from '@heroicons/react/solid';
import { PencilAltIcon } from '@heroicons/react/solid';
import AppService from '../../services/AppService';
import { AppContext } from '../../app/context';

function Product(props) {
  const { setOpenModal, setIsNew, setProduct } = React.useContext(AppContext);

  const imageSrc = 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg';
  const imageAlt = "Front of men's Basic Tee in black.";

  const product = props.product;

  const editProduct = async (product) => {
    setIsNew(false);
    setOpenModal(true);
    setProduct(product);
  };

  const deleteProduct = async (product) => {
    try {
      const response = await AppService.deleteProduct(product.id);

      if (response.status === 200) {
        console.info('Se elimino el producto');
        window.location.reload(false);
      } else {
        console.info('Hubo un inconveniente al eliminar el producto');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div key={product.id} className="group relative">
      <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
        <img src={imageSrc} alt={imageAlt} className="w-full h-full object-center object-cover lg:w-full lg:h-full" />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <p>{product.name}</p>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{product.description}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">${product.price}</p>
      </div>
      <div className="mt-4 flex justify-between">
        <PencilAltIcon className="h-5 w-5" onClick={() => editProduct(product)} />
        <TrashIcon className="h-5 w-5" onClick={() => deleteProduct(product)} />
      </div>
    </div>
  );
}

export default Product;
