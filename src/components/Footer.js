import React from 'react'
import facebook from '../images/icon-facebook.svg'
import instagram from '../images/icon-instagram.svg'
import pinterest from '../images/icon-pinterest.svg'
import twitter from '../images/icon-twitter.svg'
import logo from '../images/logo.svg'


function Footer() {
    return (
        <footer style={{backgroundColor: 'black'}}>
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
