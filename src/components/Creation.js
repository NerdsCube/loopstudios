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
                <div className="grid one"><label>DEEP EARTH</label></div>
                <div className="grid two"><label>NIGHT ARCADE</label></div>
                <div className="grid three"><label>SOCCER TEAM VR</label></div>
                <div className="grid four"><label>THE GRID</label></div> 
                <div className="grid five"><label>FROM UP ABOVE</label></div>
                <div className="grid six"><label>POCKET BOREALIS</label></div>
                <div className="grid seven"><label>THE CURIOSITY</label></div>
                <div className="grid eight"><label>MAKE IT FISHEYE</label></div>
                <button className="btn-down">See All</button>
            </div>            
        </div>
    )
}

export default Creation
