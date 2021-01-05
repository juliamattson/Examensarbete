import Layout from "../Components/Layout";
import client from '../Components/ApolloClient';
import Product from "../Components/Products";
import gql from 'graphql-tag';

const PRODUCTS_QUERY = gql`query{
    products {
        nodes {
          ... on SimpleProduct {
            id
            name
            price
            onSale
            description
            purchasable
            stockQuantity
            image {
                sourceUrl
              }
          }
        }
      }
}`;

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
    const result = await client.query({ query: PRODUCTS_QUERY });
    return {
        products: result.data.products.nodes
    }
};

export default Index;