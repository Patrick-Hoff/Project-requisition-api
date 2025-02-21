import { Link } from 'react-router-dom'

import './style.css'

function Header() {
    return (
        <header>
            <Link to='/'>
            Pagina Header
            </Link>
        </header>
    )
}

export default Header