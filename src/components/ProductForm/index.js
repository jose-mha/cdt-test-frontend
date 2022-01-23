import React from 'react';
import { AppContext } from '../../app/context';
import AppService from '../../services/AppService';

function ProductForm({ edit, product }) {
  const { setOpenModal, setIsNew } = React.useContext(AppContext);

  let model = {
    name: '',
    price: '',
    description: '',
  };

  console.log(edit);

  const productEdit = edit ? model : product;
  const [values, setValues] = React.useState(model);

  const addProduct = async () => {
    setOpenModal(false);
    try {
      console.info(values);
      const response = await AppService.newProduct(values);

      if (response.status === 201) {
        console.info('Se creo correctamente el personaje');
        setIsNew(true);
        window.location.reload(false);
      } else {
        console.info('Hubo un inconveniente al guardar los datos ');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const updateProduct = async () => {
    setOpenModal(false);
    try {
      console.info(values);
      const response = await AppService.updateProduct(productEdit.id, values);

      if (response.status === 200) {
        console.info('Se actualizo correctamente el producto');
        setIsNew(true);
        window.location.reload(false);
      } else {
        console.info('Hubo un inconveniente al actualizar los datos');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!edit) {
      updateProduct();
    } else {
      addProduct();
    }
  };

  const handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    const newValues = {
      ...values,
      [name]: value,
    };
    setValues(newValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">Nuevo Producto</h1>

      <label htmlFor="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
        Nombre
      </label>
      <input
        name="name"
        onChange={handleChange}
        className="form-control mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-orange-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
        placeholder={productEdit.name}
        type="text"
      />

      <label htmlFor="price" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
        Precio
      </label>
      <div className="relative mb-5 mt-2">
        <input
          name="price"
          onChange={handleChange}
          className="form-control mb-8 text-gray-600 focus:outline-none focus:border focus:border-orange-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
          placeholder={productEdit.price}
          type="text"
        />
      </div>

      <label htmlFor="description" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
        Descripción
      </label>
      <input
        name="description"
        onChange={handleChange}
        className="form-control mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-orange-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
        placeholder={productEdit.description}
        type="text"
      />

      <div className="flex items-center justify-start w-full">
        <button
          type="submit"
          className="focus:outline-none transition duration-150 ease-in-out hover:bg-orange-600 bg-blue-700 rounded text-white px-8 py-2 text-sm"
        >
          Guardar
        </button>
        <button
          className="focus:outline-none ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
          onClick={() => setOpenModal(false)}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
export default ProductForm;
