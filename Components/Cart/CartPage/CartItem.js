import { useState } from 'react';
import { updateCart } from '../../../functions';

const CartItem = ({ item, setCart }) => {
    const [productCount, setProductCount] = useState(item.quantity);

    const decrease = (itemQuantity) => {
        const itemQty = JSON.parse(itemQuantity)
        if (itemQty > 1) {
            const newQty = itemQty - 1;
            console.log(newQty)
            return newQty;

        }
    };
    const increase = (itemQuantity) => {
        const itemQty = JSON.parse(itemQuantity)
        const newQty = itemQty + 1;
        console.log(newQty)
        return newQty;
    };

    return (
        <tr className="cart-item" key={item.id}>
            <th className="cart-element cart-element-close">
                <span className="cart-close-icon" onClick={(event) => removeProductClick()}>
                    <i className="fa fa-times-circle"></i>
                </span>
            </th>
            <td className="cart-element">
                <img width="64" src={item.image.sourceUrl} srcSet={item.image.srcSet} alt={item.image.title} />
            </td>
            <td className="cart-element">{item.name}</td>
            <td className="cart-element">{item.price} kr</td>
            <td className="cart-element"><i className="fa fa-minus-circle" onClick={() => decrease(item.quantity)} />{item.quantity}<i className="fa fa-plus-circle" onClick={() => increase(item.quantity)} /></td>
        </tr>
    )
};

export default CartItem;