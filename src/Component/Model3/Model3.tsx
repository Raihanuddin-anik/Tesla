import React, { useState } from 'react';
import './Model3.css'
const Model3 = () => {
    const [showData, setShowData] = useState<boolean>(false)

    return (
        <div  onMouseOver={() => setShowData(true)} onMouseOut={() => setShowData(false)} className="model3_img fill-window">
              {showData &&
                <div>
                <div className="Image_header">
                    <h1>Model 3</h1>
                    <small>apply online for Touchless delivery</small>
                </div>
                <div className="double_button">
                    <button className="dark_button" >ORDER NOW</button>
                    <button className="white_button" >LEARN MORE</button>
                </div>
            </div>


            }
        </div>
    );
};

export default Model3;