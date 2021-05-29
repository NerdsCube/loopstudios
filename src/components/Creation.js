import React from 'react'
import image1 from '../images/desktop/image-curiosity.jpg'
import image2 from '../images/desktop/image-deep-earth.jpg'
import image3 from '../images/desktop/image-fisheye.jpg'
import image4 from '../images/desktop/image-from-above.jpg'
import image5 from '../images/desktop/image-grid.jpg'
import image6 from '../images/desktop/image-night-arcade.jpg'
import image7 from '../images/desktop/image-pocket-borealis.jpg'
import image8 from '../images/desktop/image-soccer-team.jpg'

function Creation() {
    return (
        <div className="creation">
            <div className="create">
                <h1>CREATION</h1>
                <button>See All</button>
            </div>
            <div className="creations">
                <div className="grid one"><label>DEEP EARTH</label></div>
                <div className="grid two"><img className="image2" src={image6} /><label>NIGHT ARCADE</label></div>
                <div className="grid"><img className="image3" src={image8} /><label>SOCCER TEAM VR</label></div>
                <div className="grid"><img className="image4" src={image5} /><label>THE GRID</label></div>
                <div className="grid"><img className="image5" src={image4} /><label>FROM UP ABOVE</label></div>
                <div className="grid"><img className="image6" src={image7} /><label>POCKET BOREALIS</label></div>
                <div className="grid"><img className="image7" src={image1} /><label>THE CURIOSITY</label></div>
                <div className="grid"><img className="image8" src={image3} /><label>MAKE IT FISHEYE</label></div>
            </div>            
        </div>
    )
}

export default Creation
