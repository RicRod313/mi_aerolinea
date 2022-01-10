import { Link } from 'react-router-dom'
import menu from 'assets/icons/ticket.png'
import logo from 'assets/icons/logo.png'
import './Navbar.css';

const Navbar = (props) => {
    return (
        <header className="header">
            <div className="logo-container">
                <Link to="/">
                    <img src={logo} alt="" className="imgLogo"/>
                </Link>
                <h1>
                    <Link to="/" className="logo">
                        Mi Aerolínea
                    </Link>
                </h1>
            </div>
            <div className="button" onClick={() => props.openMenu()}>
                <img className="menu" src={menu} alt=""/>
            </div>
        </header>
    )
}

export default Navbar
