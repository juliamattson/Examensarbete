import gql from "graphql-tag";
import client from '../Components/ApolloClient';
import Layout from "../Components/Layout";

const INDEX_QUERY = gql`query{
    page(id: "cG9zdDoxNw==") {
        title
        content
      }
    }
`;

const Index = (props) => {
    const { page } = props;

    return (
        <Layout>
            <h1>{page.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: page.content }} />
        </Layout>
    )
};

Index.getInitialProps = async () => {
    const result = await client.query({ query: INDEX_QUERY });
    return {
        page: result.data.page
    }
};

export default Index;