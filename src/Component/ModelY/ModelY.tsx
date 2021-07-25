import React,{useState} from 'react';
import './ModelY.css'
const ModelY = () => {
    const [showData, setShowData] = useState<boolean>(false)
    return (
        <div onMouseOver={() => setShowData(true)} onMouseOut={() => setShowData(false)} className="modely_img">
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

export default ModelY;