import { API } from './api';

/**
 ** Clase para el consumo de endpoints implementando API
 */
class AppService {
  url = 'http://localhost:5000/api/v1/';

  /**
   * @endpoint /products
   */
  async newProduct(payload) {
    return await API.post(`${this.url}products`, payload);
  }

  /**
   * @endpoint /products
   */
  async getProducts() {
    return await API.get(`${this.url}products`);
  }

  /**
   * @endpoint /products/id
   */
  async getProductById(id = '') {
    return await API.get(`${this.url}products/${id}`);
  }

  /**
   * @endpoint /products/id
   */
  async updateProduct(id = '', payload) {
    return await API.patch(`${this.url}products/${id}`, payload);
  }

  /**
   * @endpoint /products/id
   */
  async deleteProduct(id = '') {
    return await API.delete(`${this.url}products/${id}`);
  }
}

export default new AppService();
