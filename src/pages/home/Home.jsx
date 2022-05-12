import React from 'react';
import './home.css';
import { NavLink } from 'react-router-dom';

export const Home = () => {
  return (
    <div className='body-home'>
      <div className="home-container">
        <h1 className="home-title"><span className="green">GREEN</span> <span className="heroes">HEROES</span></h1>
        <div className="home-text">
          <h3 className="home-subtitle">
            La nature à besoin de héros, les héros ont besoin de{' '}
            <div className="greenHeroes">
              <span className="green">GREEN</span>
              <span className="heroes">HEROES</span>
            </div>
          </h3>

          <ul className="choiceList">
            <li className="choice-item">
            <NavLink to="/agir" className="choice-buttons-b">
                AGIR
              </NavLink>
            </li>
            <li className="choice-item">
              <NavLink to="/informer" className="choice-buttons-a">
                S'INFORMER
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
