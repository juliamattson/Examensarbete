import Layout from "../Components/Layout";
import client from '../Components/ApolloClient';
import Product from "../Components/Products";
import gql from 'graphql-tag';
import { Helmet } from 'react-helmet';

const PRODUCTS_QUERY = gql`query{
    products {
        nodes {
          ... on SimpleProduct {
            id
            name
            description
            image {
              sourceUrl
              srcSet
              title
            }
            onSale
            price
            stockStatus
          }
        }
      }
}`;

const ProduktSida = (props) => {
    const { products } = props;
    return (
        <Layout>
            <div className="product-page-header">
                <Helmet>
                    <title>Produkter - Hjärtan av guld UF</title>
                </Helmet>
                <h1>Produkter</h1>
            </div>
            <div className="product-wrapper">
                {products.length ? (
                    products.map(product => <Product product={product} key={product.id} />)
                ) : ''}
            </div>
        </Layout>
    )
};

ProduktSida.getInitialProps = async () => {
    const result = await client.query({ query: PRODUCTS_QUERY });
    return {
        products: result.data.products.nodes
    }
};

export default ProduktSida;