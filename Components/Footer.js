import Link from 'next/link';

const Footer = () => {

    return (
        <>
            <div className="footer">
                <div className="left-footer-div footer-div">
                    <Link href={"/integritetspolicy"}><p className="policy">Köpvillkor</p></Link>
                    <p>Västra Söbacken 29</p>
                    <p>444 41 Stenungsund</p>
                    <p>info@hjartanavguld.se</p>
                </div>
                <div className="middle-footer-div footer-div">
                    <img className="logo-image" alt="logo-image" src="https://wp.hjartanavguld.se/wp-content/uploads/2020/11/Peach-and-Gray-Watercolor-Background-Instagram-Post-5.png" />
                </div>
                <div className="right-footer-div footer-div">
                    <div>
                        <p>Våra sociala medier</p>
                    </div>
                    <div>
                        <Link href="https://www.instagram.com/hjartanavguld.uf/"><img className="socialmedia-image" alt="socialmedia-image" src="https://wp.hjartanavguld.se/wp-content/uploads/2021/01/insta-logo.png" /></Link>
                        <Link href="https://www.facebook.com/125129157520942/posts/3833200376713783/"><img className="socialmedia-image facebook" alt="socialmedia-image" src="https://wp.hjartanavguld.se/wp-content/uploads/2021/01/fb-logo.png" /></Link>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Footer;