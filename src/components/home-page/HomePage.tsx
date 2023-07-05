import '../../styles/HomePage.css';
import { Link } from 'react-router-dom';

export default function HomePage() {

    return (
        <div className="home-page">
            <img className='background-img' src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
            <div className="content">
                <h1>Welcome to the <span className='company-name'>TechHub</span></h1>
                <div className='sub-text'>Discover a world of cutting-edge technology at our premier destination for a wide range of tech products. Explore the latest smartphones, laptops, audio devices, and smart home gadgets from top brands. Experience exceptional customer service, competitive prices, and embark on your tech journey with us today.</div>
                <Link to='/shop' className='call-to-action-button'>Shop Now</Link>
            </div>

        </div>
    )
}