import React, { useState } from 'react';
import "./agir.css";
import "../../assets/pictures/homePicture.jpg";
import "../../assets/pictures/test-favicon.png";


const MobileCard = ({image, title, date, description, icon}) => {

  const [favicon, setFavicon] = useState();
  const [picture, setPicture] = useState();

  const testPicture="../../assets/pictures/homePicture.jpg";
  const testFavicon="../../assets/pictures/test-favicon.png"

  return (
    <div className='mobileCard'>
      <div className='image' >
        <img id="imagetest" src={testPicture} alt="" />
      </div>
        <div className='mobileCard_info'>
            <h3>{title}J'aime l'écologie et je suis un titre d'article</h3>
            <h4>{date}10/06/2020</h4>
            {/* <p>{description}Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua.
             Ut enim ad minim veniam, quis nostrud exercitation 
             </p> */}
            <div className= "favicon">
              {favicon}
              <img src={testFavicon} alt="" />
            </div>
        </div>
    </div>
  )
}

export default MobileCard;