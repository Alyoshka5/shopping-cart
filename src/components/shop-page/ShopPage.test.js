import rendrer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import ShopPage from './ShopPage';

it('renders shop page content', () => {
    const pageTree = rendrer.create(<BrowserRouter><ShopPage /></BrowserRouter>).toJSON();

    expect(pageTree).toMatchSnapshot();
});