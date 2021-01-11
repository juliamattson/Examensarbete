import { useContext } from 'react';
import { AppContext } from '../../Context/AppContext';
import CartItem from './CartItem';

const CartItemsContainer = () => {
    const [cart, setCart] = useContext(AppContext);
    console.log(cart)
    const removeProductClick = () => {

    };

    return (
        <div>
            {cart ? (
                <div className="cart-wrapper container">
                    <h1 className="mt-5 cart-header">Kundvagn</h1>
                    <table className="table table-hover">
                        <thead>
                            <tr className="header-container">
                                <th className="cart-heading" scope="col" />
                                <th className="cart-heading" scope="col" />
                                <th className="cart-heading" scope="col">Produkt</th>
                                <th className="cart-heading" scope="col">Pris</th>
                                <th className="cart-heading" scope="col">Antal</th>
                                <th className="cart-heading" scope="col">Totalt</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.products.length && (
                                cart.products.map(item => (
                                    <CartItem key={item.productId} item={item} setCart={setCart} />
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            ) : ''}
        </div>
    )
};

export default CartItemsContainer;