import React from "react";
import "./Images.css";
const PictureCard = props => (
    <div className="card">
      <div className="img-container">
              <img class ="icon"  alt = "icon"src ={props.image}
          onClick = {() => props.handleClick(props.id)}
      ></img>
      </div>
    </div>
  );



export default PictureCard;
