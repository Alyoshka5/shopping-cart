import '../styles/CartIcon.css';
import Icon from '@mdi/react';
import { mdiCartOutline } from '@mdi/js';

export default function CartIcon() {

    return (
        <div className="cart">
            <div className="icon">
                <Icon path={mdiCartOutline} size={1.3} />
            </div>
            <div className="item-count">
                <div className="count-container">
                    0
                </div>
            </div>
        </div>
    );
}