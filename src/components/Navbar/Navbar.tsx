import './Navbar.scss';
function Navbar() {
    return (
        <nav className="navbar">
            <h1 className="navbar__logo">
            Solu<span>tec</span>
            </h1>
            <ul className="navbar__links">
                <li className="navbar__link">Sobre</li>
                <li className="navbar__link">Planos</li>
                <li className="navbar__link">Contato</li>
            </ul>
        </nav>
    )

}
export default Navbar;