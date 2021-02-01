import Head from 'next/head';
import Header from './Header';
import '../Styles/style.css'
import { AppProvider } from './Context/AppContext';
import Footer from './Footer';

const Layout = (props) => {
    return (
        <AppProvider>
            <div>
                <Head>
                    <link rel="icon" type="image/png" sizes="32x32" href="https://wp.hjartanavguld.se/wp-content/uploads/2021/01/cropped-logo_dark_charcoal.png" />
                    <title>Hjärtan av guld UF</title>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
                    <link rel="stylesheet" href="https://bootswatch.com/4/litera/bootstrap.min.css" />
                    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100&display=swap" rel="stylesheet"></link>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                </Head>
                <Header />
                {props.children}
                <Footer />
            </div>
        </AppProvider>
    )
};

export default Layout;