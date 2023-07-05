import rendrer from 'react-test-renderer';
import HomePage from './HomePage'
import { BrowserRouter } from 'react-router-dom';
;

it('renders home page content', () => {
    const pageTree = rendrer.create(<BrowserRouter><HomePage /></BrowserRouter>).toJSON();

    expect(pageTree).toMatchSnapshot();
})