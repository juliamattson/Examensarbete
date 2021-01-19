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
            <h1 className="header">{page.title}</h1>
            <div className="text" dangerouslySetInnerHTML={{ __html: page.content }} />
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