import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./DropDownDesktop.css"


/* Made a dropdowns because burger menu are used for mobile only */

export const DropDownDesktop = () => {
/* Using a useState to hide/show the menu*/
const [showMenu, setShowMenu] = useState(false)


const handleVisible = () => {
    setShowMenu(!showMenu)
}

const [character, setCharacter] = useState({});

useEffect(() => {
  axios
      .get(`/api/myprofile`, {withCredentials: true})
      .then((res) => res.data)
      .then((data) => setCharacter(data));
  }, []);

  return (
    <div className="flex items-row justify-end" >
<div className="relative inline-block text-left">
  <div>
    <button type="button" className="" 
    onClick={handleVisible}>
      <img src={character.list_imageUrl} alt='ProfilePicture' className="dropdown-img"/>
    </button>
  </div>
  {showMenu &&    /* It's like if/else */
  <div onMouseLeave={()=> setShowMenu(!showMenu)} className="" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
    <div className="" role="none">
    <Link to="/myprofile"><button type="submit" className="" role="menuitem" tabindex="-1" id="menu-item-1">My profile</button></Link>
    <button className="" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</button>
    <Link to="/login"><button type="submit" className="" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button></Link>
    </div>
  </div>}
</div>
    </div>

  )
};
export default DropDownDesktop