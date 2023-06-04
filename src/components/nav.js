import {Link} from 'react-router-dom';
import Logo from '../assets/dreammakercorp-logo.png';
import './nav.scss';

const Nav = () => {
    return (
        <div className="navbar">
            <div className="nav-container">
                <div className="nav-logo">
                    <img src={Logo} alt="" />
                </div>
                <div className="navitems">
                    <div className="nav-item">
                        <Link to="/" className="item">
                            Home
                        </Link>
                    </div>
                    <div className="nav-item">
                        <Link to="/#" className="item">
                            Projects
                        </Link>
                    </div>
                    <div className="nav-item">
                        <Link to="/#" className="item">
                            Ethos
                        </Link>
                    </div>
                    <div className="nav-item">
                        <Link to="/#" className="item">
                            Applications
                        </Link>
                    </div>
                    <div className="nav-item">
                        <Link to="/#" className="item">
                            Case Studies
                        </Link>
                    </div>
                    <div className="nav-item nav-cta">
                        <Link to="/#" className="item-cta">
                            Make Your Dreams Come True
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Nav;