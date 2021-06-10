const apiUrl = 'https://front-test-api.herokuapp.com/api/';
const headers = { 'Content-Type': 'application/json'};

export function getProductlist() {
    return fetch(`${apiUrl}product`, {method: 'GET', headers});
}

export function getProductDetail(id) {
    return fetch(`${apiUrl}product/${id}`, {method: 'GET', headers})
    .then((response) => response.json());
}

export function addProduct(product) {
    fetch(`${apiUrl}/cart`, {method: 'POST', headers, body: JSON.stringify(product)} )
}
