const apiUrl = 'https://front-test-api.herokuapp.com/api/';

export function getProductlist() {
    return fetch(`${apiUrl}product`);
} 
