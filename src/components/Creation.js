import React from 'react'
import '../style.css'


function Creation() {
    return (
        <div className="creation">
            <div className="create">
                <h1>CREATION</h1>
                <button className="btn">See All</button>
            </div>
            <div className="creations">
                <a href="#" className="grid"><div className="one"><label>DEEP EARTH</label></div></a>
                <a href="#" className="grid"><div className="two"><label>NIGHT ARCADE</label></div></a>
                <a href="#" className="grid"><div className="three"><label>SOCCER TEAM VR</label></div></a>
                <a href="#" className="grid"><div className="four"><label>THE GRID</label></div> </a>
                <a href="#" className="grid"><div className="five"><label>FROM UP ABOVE</label></div></a>
                <a href="#" className="grid"><div className="six"><label>POCKET BOREALIS</label></div></a>
                <a href="#" className="grid"><div className="seven"><label>THE CURIOSITY</label></div></a>
                <a href="#" className="grid"><div className="eight"><label>MAKE IT FISHEYE</label></div></a>
                <button className="btn-down">See All</button>
            </div>            
        </div>
    )
}

export default Creation
