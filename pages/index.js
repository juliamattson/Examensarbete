import gql from "graphql-tag";
import client from '../Components/ApolloClient';
import Layout from "../Components/Layout";

const INDEX_QUERY = gql`query{
    page(id: "cG9zdDoxNw==") {
        title
        content
    homepage_images {
      fieldGroupName
      bild1 {
        id
        sourceUrl
      }
      bild2 {
        id
        sourceUrl
      }
      bild3 {
        id
        sourceUrl
      }
    }
      }
    }
`;

const Index = (props) => {
    const { page } = props;

    return (
        <Layout>
            <div className="index-wrapper">
                <div className="index-top-div">
                    <h1 className="header">{page.title}</h1>
                    <div className="text-index" dangerouslySetInnerHTML={{ __html: page.content }} />
                </div>
                <div className="index-bottom-div">
                    <div className="left">
                        <img className="homepage-mini-images" src={page.homepage_images.bild1.sourceUrl} />
                    </div>
                    <div className="middle">
                        <img className="homepage-mini-images" src={page.homepage_images.bild2.sourceUrl} />
                    </div>
                    <div className="right">
                        <img className="homepage-mini-images" src={page.homepage_images.bild3.sourceUrl} />
                    </div>
                </div>
            </div>
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