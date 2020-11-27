import Head from 'next/head';
import Header from './Header';
import '../Styles/style.css'

const Layout = (props) => {
    return (
        <div>
            <Head>
                <title>Hjärtan av guld UF</title>
                <link rel="stylesheet" href="https://bootswatch.com/4/litera/bootstrap.min.css" />
            </Head>
            <Header />
            {props.children}
        </div>
    )
};

export default Layout;