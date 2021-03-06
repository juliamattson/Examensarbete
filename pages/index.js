import gql from "graphql-tag";
import client from '../Components/ApolloClient';
import Layout from "../Components/Layout";
import CookieConsent from "react-cookie-consent";
import { Helmet } from 'react-helmet';

const INDEX_QUERY = gql`query{
    page(id: "cG9zdDoxNw==") {
        title
        content
        bildtexter {
            bildtext1
            bildtext2
            bildtext3
          }
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
            <CookieConsent
                buttonText="Jag förstår!"
                buttonStyle={{ background: "#f0c7df", }}
            >Den här hemsidan använder Cookies.</CookieConsent>
            <div className="index-wrapper">
                <Helmet>
                    <title>Hem - Hjärtan av guld UF</title>
                </Helmet>
                <div className="index-top-div">
                    <h1 className="header">{page.title}</h1>
                    <div className="text-index" dangerouslySetInnerHTML={{ __html: page.content }} />
                </div>
                <div className="index-bottom-div">
                    <div className="left">
                        <img className="homepage-mini-images" height="60" width="60" alt="memory-image-one" src={page.homepage_images.bild1.sourceUrl} />
                        <p>{page.bildtexter.bildtext1}</p>
                    </div>
                    <div className="middle">
                        <img className="homepage-mini-images" height="60" width="60" alt="ingen-mobbning-image" src={page.homepage_images.bild2.sourceUrl} />
                        <p>{page.bildtexter.bildtext2}</p>
                    </div>
                    <div className="right">
                        <img className="homepage-mini-images" height="60" width="60" alt="memory-image-two" src={page.homepage_images.bild3.sourceUrl} />
                        <p>{page.bildtexter.bildtext3}</p>
                    </div>
                </div>
            </div>
        </Layout >
    )
};

Index.getInitialProps = async () => {
    const result = await client.query({ query: INDEX_QUERY });
    return {
        page: result.data.page
    }
};

export default Index;