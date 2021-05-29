import React from 'react'
import facebook from '../images/icon-facebook.svg'
import instagram from '../images/icon-instagram.svg'
import pinterest from '../images/icon-pinterest.svg'
import twitter from '../images/icon-twitter.svg'
import logo from '../images/logo.svg'


function Footer() {
    return (
        <footer style={{backgroundColor: 'black'}}>
            <div className="nav">
                <div><img src={logo} /></div>
                <ul>
                    <li className="foot-item"><a href="#" className="foot-anchor">About</a></li>
                    <li className="foot-item"><a href="#" className="foot-anchor">Careers</a></li>
                    <li className="foot-item"><a href="#" className="foot-anchor">Events</a></li>
                    <li className="foot-item"><a href="#" className="foot-anchor">Products</a></li>
                    <li className="foot-item"><a href="#" className="foot-anchor">Support</a></li>
                </ul>
            </div>
            <div className="social">
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
