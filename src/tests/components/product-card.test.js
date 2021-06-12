import { render} from '@testing-library/react';
import ProductCard from '../../components/product-card';
import {PRODUCTS} from '../mocks/products';

test('renders the component', () => {
    const {container} = render(<ProductCard product={PRODUCTS[0]} />);

    expect(container).toMatchSnapshot();
});

test('render the component when price and model/brand dont exist', () => {
    const {container} = render(<ProductCard product={PRODUCTS[1]} />);

    expect(container).toMatchSnapshot();
})