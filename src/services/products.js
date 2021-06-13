import axios from 'axios';

const apiUrl = 'https://front-test-api.herokuapp.com/api/';

export function getProductlist() {
  return axios.get(`${apiUrl}product`);
}

export function getProductDetail(id) {
  return axios.get(`${apiUrl}product/${id}`);
}

export function addProduct(id, color, storage) {
  return axios.post(`${apiUrl}cart`, { id, colorCode: color, storageCode: storage });
}
