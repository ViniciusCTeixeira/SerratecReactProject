import { Link } from 'react-router-dom'

import styles from '../../../assets/img/styles/Navbar'
import logo from '../img/logo'

function Navbar() {

    return (
        <nav>
            <Link to="/">
                <img src=''/>
            </Link>
            <Link to="/">Home</Link>
            <Link to="/contato">Contato</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/login">Login</Link>
        </nav>
    )

}

export default Navbar;