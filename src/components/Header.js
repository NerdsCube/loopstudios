import React, { useState } from 'react'
import logo from '../images/logo.svg'
import hamburger from '../images/icon-hamburger.svg'
import '../style.css'

function Header() {
    const [navbar, setNavbar] = useState(false)

    const toggle = () => {setNavbar(!navbar)}
    return (
        <div className="background">
            <nav className={ navbar ? "mobile-nav" : 'desktop-nav' }>
                <div className="logo"><img src={logo} /></div>
                <span className="toggle"><img src={hamburger} onClick={toggle} /></span>
                <ul className="list">
                    <li className="list-item"><a href="#" className="list-anchor">About</a></li>
                    <li className="list-item"><a href="#" className="list-anchor">Careers</a></li>
                    <li className="list-item"><a href="#" className="list-anchor">Events</a></li>
                    <li className="list-item"><a href="#" className="list-anchor">Products</a></li>
                    <li className="list-item"><a href="#" className="list-anchor">Support</a></li>
                </ul>
            </nav>
            <div>
                <fieldset>
                    <h1>IMMERSE EXPERIENCE THAT DELIVER</h1>
                </fieldset>
            </div>
            
        </div>
    )
}

export default Header
