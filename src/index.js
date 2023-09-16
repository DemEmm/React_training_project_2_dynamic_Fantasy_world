import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './comp/Navbar';
import bg_image from "./image/6000x4000-bg.jpg"
function Mail(){
    return(
        <div className="main">
            <img src={bg_image} className="background"></img>
            <Navbar/>
        </div>
    )

}


ReactDOM.render(
<Mail></Mail>
,
document.getElementById("root")

)


