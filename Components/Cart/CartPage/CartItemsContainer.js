import { useContext } from 'react';
import { AppContext } from '../../Context/AppContext';
import CartItem from './CartItem';
import Link from 'next/link';

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
                                <th className="cart-heading" scope="col">Pris/st</th>
                                <th className="cart-heading" scope="col">Antal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.products.length && (
                                cart.products.map(item => (
                                    <CartItem
                                        key={item.productId}
                                        item={item}
                                        setCart={setCart}
                                    />
                                ))
                            )}
                        </tbody>
                    </table>
                    <div className="row cart-total-container mt-5">
                        <div className="col-6">
                            <h5>Totalt: </h5>
                            <table className="table">
                                <tbody>
                                    <tr className="table-light">
                                        <td className="cart-element-total">Antal produkter:</td>
                                        <td className="cart-element-total">{cart.totalProductsCount}</td>
                                    </tr>
                                    <tr className="table-light">
                                        <td className="cart-element-total">Totalbelopp:</td>
                                        <td className="cart-element-total">{cart.totalProductsPrice} kr</td>
                                    </tr>
                                </tbody>
                            </table>
                            <Link href="/checkout">
                                <button className="btn btn-secondary">Slutför köp</button>
                            </Link>
                        </div>
                    </div>
                </div>
            ) : (
                    <>
                        <div className="empty-cart">
                            <h2>Din kundvagn är tom..</h2>
                        </div>
                    </>
                )}
        </div>
    )
};

export default CartItemsContainer;