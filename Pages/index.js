import Layout from "../Components/Layout";
import clientConfig from '../client-config'
import fetch from 'isomorphic-unfetch';
import Product from "../Components/Products";

const Index = (props) => {
    const { products } = props;
    return (
        <Layout>
            <div className="product-wrapper">
                {products.length ? (
                    products.map(product => <Product product={product} key={product.id} />)
                ) : ''}
            </div>
        </Layout>
    )
};

Index.getInitialProps = async () => {
    const res = await fetch(`${clientConfig.siteUrl}/produkter`);
    const productsData = await res.json();

    return {
        products: productsData
    }
};

export default Index;