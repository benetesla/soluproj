import { Browser, House, UploadSimple } from 'phosphor-react';
import Button from '../Button/Button';
import './Navbar.scss';
function Navbar() {
    return (
        <nav className="navbar">
            <h1 className="navbar__title">ST</h1>
            <section className="navbar__links">
                <a href="/" className="navbar__link">
                    <House size={32} />
                </a>
                <a href="/about" className="navbar__link">
                    <Browser size={32} />
                </a>
                <a href="/about" className="navbar__link">
                    <UploadSimple size={32} />
                </a>
               <Button name={'Login'}/>
            </section>
        </nav>
    )

}
export default Navbar;