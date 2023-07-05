import { NavLink, useLocation } from 'react-router-dom';
import '../styles/NavBar.css';
import Icon from '@mdi/react';
import { mdiChip } from '@mdi/js';

export default function NavBar() {
    const currentPath = useLocation().pathname;
    const currentPathClassName = currentPath === '/' ? 'home-path' : 'shop-path';

    return (
        <nav className={`${currentPathClassName}-nav`}>
            <ul>
                <div className='company-icon'>
                    <h2>TechHub</h2>
                    <Icon path={mdiChip} size={1.5} />
                </div>

                <li><NavLink to='/' className={`${currentPathClassName}-link`}>Home</NavLink></li>
                <li><NavLink to='/shop' className={`${currentPathClassName}-link`}>Shop</NavLink></li>
            </ul>
        </nav>
    )
}