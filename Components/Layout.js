import Head from 'next/head';
import Header from './Header';
import '../Styles/style.css'
import { AppProvider } from './Context/AppContext';

const Layout = (props) => {
    return (
        <AppProvider>
            <div>
                <Head>
                    <title>Hjärtan av guld UF</title>
                    <link rel="stylesheet" href="https://bootswatch.com/4/litera/bootstrap.min.css" />
                </Head>
                <Header />
                {props.children}
            </div>
        </AppProvider>
    )
};

export default Layout;