import Layout from "../Components/Layout"; import client from '../Components/ApolloClient';
import Product from "../Components/Products";
import gql from 'graphql-tag';

const PRODUCTS_QUERY = gql`query{
    products {
        nodes {
          id
          databaseId
          name
          image {
            sourceUrl
            description
          }
          onSale
          purchasable
          ... on SimpleProduct {
            price
          }
        }
      }
}`;

const ProduktSida = (props) => {
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

ProduktSida.getInitialProps = async () => {
    const result = await client.query({ query: PRODUCTS_QUERY });
    return {
        products: result.data.products.nodes
    }
};

export default ProduktSida;