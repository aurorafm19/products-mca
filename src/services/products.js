const apiUrl = 'https://front-test-api.herokuapp.com/api/';
const headers = { 'Content-Type': 'application/json' };

export function getProductlist() {
  return fetch(`${apiUrl}product`, {
    method: 'GET',
    headers,
  }).then((response) => response.json());
}

export function getProductDetail(id) {
  return fetch(`${apiUrl}product/${id}`, {
    method: 'GET',
    headers,
  }).then((response) => response.json());
}

export function addProduct(id, color, storage) {
  fetch(`${apiUrl}cart`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id, colorCode: color, storageCode: storage }),
  })
    .then((response) => response.json())
    .then((data) => localStorage.setItem('count', data.count));
}
