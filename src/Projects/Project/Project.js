import React from 'react'
import './Project.css'
function Project({title,frameurl}) {

    // let iframe =()=>{
    //     document.getElementById('frame_cover').style.display ='none';
    //     console.log("clicked")
    // }
   
   
    return (
        <div className="project">
           
             {/* <div className="frame_cover" id="frame_cover"></div> */}
            
            <iframe src={frameurl} className="iframe" ></iframe>
            <h2><a href={frameurl} target="_blank">{title}</a></h2>
            <div className="buttom">
            {/* <button className="btn" >Open Here!</button>
            <button  className="btn">View Original site</button> */}
            </div>
            
            

        </div>
    )
}

export default Project
