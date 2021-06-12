import { render} from '@testing-library/react';
import Breadcrumbs from '../../components/breadcrumbs';

test('renders the component and shows just Home value', () => {
    const {container} = render(<Breadcrumbs/>);

    expect(container).toMatchSnapshot();
});
