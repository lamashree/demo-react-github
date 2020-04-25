import React from "react";
import "./Navbar.css";
import NavMessage from "../NavMessage"

const Navbar = props => (
    <div className="navbar">
      
        <a href= "/">Click Game</a>
        
       
        <NavMessage score={props.score} topScore={props.topScore} />
        <li>
          Score: {props.score} | Top Score: {props.topScore}
        </li>
        <div className= {props.navMsgColor}></div>
       
    </div>
)
export default Navbar;