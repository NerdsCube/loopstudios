import React from 'react'
import '../style.css'


function Creation() {
    return (
        <div className="creation">
            <div className="create">
                <h1>OUR CREATION</h1>
                <button className="btn">See All</button>
            </div>
            <div className="creations">
                <div className="grid one"><label>DEEP<br /> EARTH</label></div>
                <div className="grid two"><label>NIGHT <br /> ARCADE</label></div>
                <div className="grid three"><label>SOCCER <br /> TEAM VR</label></div>
                <div className="grid four"><label>THE <br /> GRID</label></div> 
                <div className="grid five"><label>FROM UP <br /> ABOVE VR</label></div>
                <div className="grid six"><label>POCKET <br /> BOREALIS</label></div>
                <div className="grid seven"><label>THE <br /> CURIOSITY</label></div>
                <div className="grid eight"><label>MAKE IT <br /> FISHEYE</label></div>
                <button className="btn-down">See All</button>
            </div>            
        </div>
    )
}

export default Creation
