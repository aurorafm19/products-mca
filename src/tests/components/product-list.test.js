import { render, fireEvent } from '@testing-library/react';
import ProductList from '../../components/product-list';
import {SEARCHBAR_PLACEHOLDER} from '../../constants';
import {PRODUCTS} from '../mocks/products';

const build = () => {
    const {container, getByPlaceholderText} = render(<ProductList />);

    return {
        container,
        getByPlaceholderText
    };
}
test('renders the component with no results', () => {
    const {container} = build();

    expect(container).toMatchSnapshot();
});
 