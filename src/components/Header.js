import React from 'react'
import logo from '../images/logo.svg'
import '../style.css'

function Header() {
    return (
        <div className="background">
            <nav className="desktop-nav">
                <div className="logo"><img src={logo} /></div>
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
