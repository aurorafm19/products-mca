import { render} from '@testing-library/react';
import Header from '../../components/header';
import { localStorage} from '../mocks/localStorage';


const build = () => {
    const {container} = render(<Header />);
    return {
        container
    };
}
test('renders the component', () => {
    const {container} = build();

    expect(container).toMatchSnapshot();
});

test('shows the number of products added to the cart', () => {
    global.localStorage = localStorage;
    global.localStorage.setItem('count', 2);

    const {container} = build();

    expect(container).toMatchSnapshot();
});
