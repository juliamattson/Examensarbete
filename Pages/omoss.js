import gql from "graphql-tag";
import client from '../Components/ApolloClient';
import Layout from "../Components/Layout";

const HOMEPAGE_QUERY = gql`query{
    page(id: "cG9zdDoxNw==") {
        date
        isFrontPage
        title
      }
    }
`;

const OmOss = (props) => {
    const { page } = props;
    console.log(page)
    return (
        <Layout>
            <h1>{page.title}</h1>
            <p>{page.date}</p>
        </Layout>
    )
};

OmOss.getInitialProps = async () => {
    const result = await client.query({ query: HOMEPAGE_QUERY });
    return {
        page: result.data.page
    }
};

export default OmOss;