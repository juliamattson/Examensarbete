import gql from "graphql-tag";
import client from '../Components/ApolloClient';
import Layout from "../Components/Layout";
import Contact from "../Components/Contact";

const CONTACT_QUERY = gql`query{
    page(id:"cG9zdDoyMA==") {
        title
        content
      }
    }
`;

const Kontakt = (props) => {
    const { page } = props;
    return (
        <Layout>
            <div className="contactPage">
                <span>
                    <h1 className="header">{page.title}</h1>
                </span>
                <div className="content">
                    <div className="text" dangerouslySetInnerHTML={{ __html: page.content }} />
                    <Contact />
                </div>
            </div>
        </Layout>
    )
};

Kontakt.getInitialProps = async () => {
    const result = await client.query({ query: CONTACT_QUERY });
    return {
        page: result.data.page
    }
};

export default Kontakt;