import { useState } from 'react';

const CartItem = ({ item, setCart, removeProductClick }) => {
    const [productCount, setProductCount] = useState(item.quantity);

    return (
        <tr className="cart-item" key={item.productId}>
            <td className="cart-element">
                <img width="64" src={item.image.sourceUrl} srcSet={item.image.srcSet} alt={item.image.title} />
            </td>
            <td className="cart-element">{item.name}</td>
            <td className="cart-element">{item.price} kr</td>
            <th className="cart-element cart-element-close">
                <span className="cart-close-icon" onClick={(event) => removeProductClick(event, item.productId)}>
                    <i className="fa fa-times-circle"></i>
                </span>
            </th>
        </tr>
    )
};

export default CartItem;