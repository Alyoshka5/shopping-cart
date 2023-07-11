import '../styles/CartIcon.css';
import Icon from '@mdi/react';
import { mdiCartOutline } from '@mdi/js';
import { CartIconProps } from '../types';
import { Link } from 'react-router-dom';

export default function CartIcon({ shoppingCart }: CartIconProps) {

    return (
        <Link to='/shop/cart'>
            <div className="cart-icon">
                <div className="icon">
                    <Icon path={mdiCartOutline} size={1.3} />
                </div>
                <div className="item-count">
                    <div className="count-container" data-testid='cart-item-count'>
                        {Object.values(shoppingCart).reduce((total, val) => total + val, 0)}
                    </div>
                </div>
            </div>
        </Link>
    );
}