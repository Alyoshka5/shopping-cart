import '../styles/CartIcon.css';
import Icon from '@mdi/react';
import { mdiCartOutline } from '@mdi/js';
import { CartIconProps } from '../types';

export default function CartIcon({ shoppingCart }: CartIconProps) {

    return (
        <div className="cart">
            <div className="icon">
                <Icon path={mdiCartOutline} size={1.3} />
            </div>
            <div className="item-count">
                <div className="count-container" data-testid='cart-item-count'>
                    {shoppingCart.length}
                </div>
            </div>
        </div>
    );
}