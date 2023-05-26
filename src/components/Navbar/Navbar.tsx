import './Navbar.scss';
function Navbar() {
    return (
        <nav className="navbar">
            <h1 className="navbar__logo">
            Solu<span>tec</span>
            </h1>
            <ul className="navbar__links">
                <li className="navbar__link">
                    <i className="fas fa-home"></i>
                    <a href="#Home"></a>
                </li>
                <li className="navbar__link">
                    <i className="fas fa-user"></i>
                </li>
                <li className="navbar__link">
                    <i className="fas fa-envelope"></i>
                </li>
            </ul>
        </nav>
    )

}
export default Navbar;