import React from 'react'
import './mainbody.css'
import Skill from './Skill/Skill'
import Typewriter from 'typewriter-effect';
import javascript from './Skill/Image/javascript-logo.png'
import reactLogo from './Skill/Image/react-logo.png'
import materialui from './Skill/Image/materialui-logo.png'
import html from './Skill/Image/html-logo.png'
import css from './Skill/Image/css-logo.png'
import vscode from './Skill/Image/VSCODE-logo.png'
function Mainbody() {
    return (
        <div className="mainbody">
             <div className="info">
                 <h1 className="top">Hey!🙋‍♂️ I am <i>Siddharth Chopda</i> .</h1><br />
                 <h1 className="left" >Frontend React-js Developer</h1><br />
                 <h1 className="bottom">An Enthusiastic Learner, and a Student.</h1>
                 
                 <div className="back_design">
                     <div className="c1"></div>
                     <div className="c2"></div>
                     <div className="c3"></div>
                 </div>
                 
             </div>
             <div > 
             <div className="skillTitle">
                 <h1>
                 <Typewriter
  options={{
    strings: ['TOOLS AND TECHNOLOGIES'],
    autoStart: true,
    loop: true,
  }}
/>
</h1>
             </div>
             <div className="skills">
                 <Skill image={javascript}/>
                 <Skill image={reactLogo}/>
                 <Skill image={materialui}/>
                 <Skill image={html}/>
                 <Skill image={css}/>
                 <Skill image={vscode}/>

                 </div>
                 {/* skill */}
                  {/* skill */}
                   {/* skill */}
             </div>
        </div>
    )
}

export default Mainbody
