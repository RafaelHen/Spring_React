import logo from '../../assets/logo.svg'

import './header.css'

function Header() {

    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>
                    Desenvolvido por
                    <a href="">@Rafael</a>
                </p>
            </div>
        </header>
    )
}

export default Header