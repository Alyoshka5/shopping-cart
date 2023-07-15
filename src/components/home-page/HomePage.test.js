import rendrer from 'react-test-renderer';
import HomePage from './HomePage'
import { HashRouter } from 'react-router-dom';


it('renders home page content', () => {
    const pageTree = rendrer.create(<HashRouter><HomePage /></HashRouter>).toJSON();

    expect(pageTree).toMatchSnapshot();
})