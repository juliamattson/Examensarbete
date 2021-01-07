import { AppContext } from "./Context/AppContext";
import { useContext } from 'react';

const { default: Nav } = require("./Nav")

const Header = () => {

    const [cart, setCart] = useContext(AppContext);
    console.log('cart', cart)

    return (
        <div>
            <Nav />
        </div>
    )
};

export default Header;