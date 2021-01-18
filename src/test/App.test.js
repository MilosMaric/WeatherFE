import {render, screen} from '@testing-library/react';
import App from '../App';

//TODO: Write UI tests
//TODO: Check why when tests folder is outside of src tests won't run? (nor npm run test)
test('renders learn react link', () => {
    render(<App/>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
