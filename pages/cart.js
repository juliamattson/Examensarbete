import CartItemsContainer from "../Components/Cart/CartPage/CartItemsContainer";
import Layout from "../Components/Layout";
import { Helmet } from 'react-helmet';

const Cart = () => {
    return (
        <Layout>
            <Helmet>
                <title>Kundvagn - Hjärtan av guld UF</title>
            </Helmet>
            <CartItemsContainer />
        </Layout>
    )
};
export default Cart;