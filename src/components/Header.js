import React from 'react'

function Header() {
    return (
        <div className="background">
            <nav>
                <div className="logo"><img /></div>
                <ul className="list">
                    <li className="list-item"><a href="#" className="list-anchor">About</a></li>
                    <li className="list-item"><a href="#" className="list-anchor">Careers</a></li>
                    <li className="list-item"><a href="#" className="list-anchor">Events</a></li>
                    <li className="list-item"><a href="#" className="list-anchor">Products</a></li>
                    <li className="list-item"><a href="#" className="list-anchor">Support</a></li>
                </ul>
            </nav>
            
        </div>
    )
}

export default Header
