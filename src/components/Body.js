import React from "react";
import "./Body.css";
import BankImage from "../images/bank image.png";
import Video from "../images/details.mp4";
function Body() {
  return (
    <div className="Body">
      <div className="HomePage">
        <div className="BankImage">
          <img src={BankImage}></img>
        </div>
        <div className="details">
          <video autoPlay muted loop>
            <source src={Video} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}
export default Body;
