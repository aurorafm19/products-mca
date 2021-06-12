import {filterBySearchValue} from '../../helpers/filter';
import {PRODUCTS} from '../mocks/products';

test('return the product when searchValue is acer', () => {
    expect(filterBySearchValue('acer', PRODUCTS)[0]).toEqual(PRODUCTS[0])
});

test('return null when there is not searchvalue', () => {
    expect(filterBySearchValue('', PRODUCTS)).toEqual(null);
    expect(filterBySearchValue('mobile', PRODUCTS)).toEqual([]);
});

test('return [] when filter doesnt found any match', () => {
    expect(filterBySearchValue('mobile', PRODUCTS)).toEqual([]);
});
