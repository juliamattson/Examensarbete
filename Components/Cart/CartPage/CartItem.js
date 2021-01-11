import { useState } from 'react';

const CartItem = (props) => {
    const { item, setCart } = props;
    const [productCount, setProductCount] = useState(item.quantity);

    const quantityChange = () => {
        if (process.browser) {
            const newQuantity = event.target.value;
            setProductCount(newQuantity);
        }
    };

    return (
        <tr className="cart-item" key={item.id}>
            <th className="cart-element cart-element-close">
                <span className="cart-close-icon" onClick={() => removeProductClick()}>
                    <i className="fa fa-times-circle"></i>
                </span>
            </th>
            <td className="cart-element">
                <img width="64" src={item.image.sourceUrl} srcSet={item.image.srcSet} alt={item.image.title} />
            </td>
            <td className="cart-element">{item.name}</td>
            <td className="cart-element">{item.price} kr</td>
            <td className="cart-element">
                <input
                    type="number"
                    min="1"
                    className="cart-quantity"
                    value={productCount}
                    onChange={quantityChange}
                />
            </td>
            <td className="cart-element">{item.totalPrice} kr</td>
        </tr>
    )
};

export default CartItem;