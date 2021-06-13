import { render } from '@testing-library/react';
import Searchbar from '../../components/searchbar';

test('renders the component', () => {
    const {container} = render(<Searchbar />);

    expect(container).toMatchSnapshot();
});
