import Link from 'next/link';
import CartIcon from './Cart/CartIcon';

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#"><img src="http://wp.hjartanavguld.se/wp-content/uploads/2020/11/Peach-and-Gray-Watercolor-Background-Instagram-Post-5.png" alt="logo" className="logo-image" /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor03">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link href={"/omoss"}>
                            <a className="nav-link" >Hem
                            <span className="sr-only">(current)</span>
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={"/produktsida"}>Produkter</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={"/kontakt"}>Kontakt</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={"/cart"}>Kundvagn</a>
                    </li>
                </ul>
                <CartIcon />
            </div>
        </nav>
    )
};

export default Nav;
