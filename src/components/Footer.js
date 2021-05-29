import React from 'react'
import facebook from '../images/icon-facebook.svg'
import instagram from '../images/icon-instagram.svg'
import pinterest from '../images/icon-pinterest.svg'
import twitter from '../images/icon-twitter.svg'
import logo from '../images/logo.svg'


function Footer() {
    return (
        <footer>
            <nav>
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
                <div>
                    <img src={facebook} />
                    <img src={twitter} />
                    <img src={pinterest} />
                    <img src={instagram} />
                </div>
                <p>© 2021 Loopstudios. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
