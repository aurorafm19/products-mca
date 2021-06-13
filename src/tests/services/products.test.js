import axios from 'axios';
import {CART_COUNT, PRODUCTS, PRODUCT_DETAIL} from '../mocks/products';
import {getProductlist, getProductDetail, addProduct} from '../../services/products';

jest.mock('axios');

test('gets product list', async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve(PRODUCTS))
    await expect(getProductlist()).resolves.toEqual(PRODUCTS);
});

test('gets product detail', async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve(PRODUCT_DETAIL))
    await expect(getProductDetail(PRODUCTS[2].id)).resolves.toEqual(PRODUCT_DETAIL);
});

test('add product to cart', async () => {
    axios.post.mockImplementationOnce(() => Promise.resolve(CART_COUNT))
    await expect(addProduct()).resolves.toEqual(CART_COUNT);
});