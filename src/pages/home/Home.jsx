import React from 'react';
import './home.css';
import { NavLink } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      <div className="home-container">
        <h1 className="home-title">GREENHEROES</h1>
        <div className="home-text">
          <h3 className="home-subtitle">
            La nature à besoin de héros, les héros ont besoin de GreenHeroes
          </h3>

          <ul className="choiceList">
            <li>
              <NavLink to="/informer" className='choice-buttons-a'>S'INFORMER</NavLink>
            </li>
            <li>
              <NavLink to="/agir" className='choice-buttons-b'>AGIR</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
