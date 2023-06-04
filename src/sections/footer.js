import "./footer.scss"
import Logo from "../assets/logo.png"

const Footer = () => {
    return(
        <div className="footer-container">
            <div>
                <img src={Logo} style={{width: "80%"}} alt="" />
            </div>
            <div className="footer-column">
                <ul>
                    <li>Web Development</li>
                    <li>Marketing Strategies</li>
                    <li>Communication</li>
                    <li>AI</li>
                    <li>Solutions</li>
                </ul>
            </div>
            <div className="footer-column">
                <ul>
                    <li>Documentation</li>
                    <li>Careers</li>
                    <li>News</li>
                    <li>Blog</li>
                    <li>PR</li>
                </ul>
            </div>
            <div className="footer-column">
                <ul>
                    <li>Documentation</li>
                    <li>Careers</li>
                    <li>News</li>
                    <li>Blog</li>
                    <li>PR</li>
                </ul>
            </div>
            <div className="footer-column">
                <ul>
                    <li>Documentation</li>
                    <li>Careers</li>
                    <li>News</li>
                    <li>Blog</li>
                    <li>PR</li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;