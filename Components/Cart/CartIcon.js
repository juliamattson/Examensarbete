import { useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import Link from 'next/link';

const CartIcon = () => {

    const [cart, setCart] = useContext(AppContext);
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const productsCount = (null !== cart && Object.keys(cart).length) ? cart.totalProductsCount.length : '';

    return (
        <>
            <Link href={"/cart"}>
                <a className="cart-icon-link">
                    <div className="cart-wrapper">
                        <span className="cart-icon-container">
                            {productsCount ? <span className="cart-count">{productsCount}</span> : ''}
                            <i className="fa fa-shopping-bag cart-icon" />
                        </span>
                    </div>
                </a>
            </Link>
        </>
    )
};

export default CartIcon;