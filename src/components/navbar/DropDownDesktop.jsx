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
    <div >
<div >
  <div className='drop-button'>
   
    
      <img src={character.list_imageUrl} alt='ProfilePicture' className="dropdown-img" onClick={handleVisible}/>
   
  </div>
  {showMenu &&    /* It's like if/else */
  <div onMouseLeave={()=> setShowMenu(!showMenu)}  className="dropD"  tabindex="-1">
    
    <Link to="/myprofile"><p type="submit"  role="menuitem" tabindex="-1" id="menu-item-1" className='buttonD'>My profile</p></Link>
    <p className='buttonD' role="menuitem" tabindex="-1" id="menu-item-0">Account settings</p>
    <Link className='buttonD' to="/login"><p type="submit"  role="menuitem" tabindex="-1" id="menu-item-3">Sign out</p></Link>
  
  </div>}
</div>
    </div>

  )
};
export default DropDownDesktop