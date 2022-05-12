import React from 'react'
import './navbar.css'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';



export const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    
        return (
        <div>
          <nav className="navbar">
            <div className="nav-container">
              <NavLink to="/" className="nav-logo">
                <span className="navGreen">GREEN</span><span className="navHeroes">HEROES</span>
              </NavLink>
    
              <ul className={click ? 'nav-menu active':'nav-menu'}>
                <li className='nav-item'>
                  <NavLink to="/" className={(navData) => navData.isActive ? "active nav-links" : "nav-links" } onClick={handleClick}>
                    Home
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink to="/informer" className={(navData) => navData.isActive ? "active nav-links" : "nav-links" }onClick={handleClick} >
                    S'informer
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink to="/agir" className={(navData) => navData.isActive ? "active nav-links" : "nav-links" }onClick={handleClick} >
                    Agir
                  </NavLink>
                </li>
              </ul>
              <div className="nav-icon" onClick={handleClick}>
               <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
               {/* TO PUT IN PUBLIC/INDEX.HTML */}
               {/* <script src="https://kit.fontawesome.com/0f83e5d3b7.js"crossorigin="anonymous"></script> */}
                </div>
            </div>
          </nav>
        </div>
      );
    };