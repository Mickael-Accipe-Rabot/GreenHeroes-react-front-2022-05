import React from 'react';
import './eventDetails.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Navbar } from '../navbar/Navbar';

export const EventDetails = () => {
  const [eventDetails, setEventDetails] = useState({});
  const [isParticipate, setIsParticipate] = useState(false);


  let { id } = useParams();
  const data = {
    action_id : id
  };

  

  const handleClick = () => {
    setIsParticipate(!isParticipate);
    console.log(isParticipate);
    axios
      .post('http://localhost:8000/api/users-actions', data, {withCredentials: true})
      // .then((data)=>console.log(data))
      .then((res) => {
        // console.log('data:',data);
        console.log(res.data);
        // window.location = '/';
      })
      .catch((err) => console.log(err));
  };

  const unsubscribe = () => {
    if (isParticipate) {
      onmouseleave = () => {
        'participer';
      };
    }
  };

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/actions/' + id)
      .then((res) => res.data)
      .then((data) => setEventDetails(data));
  }, [id]);

  // const [users, setUsers] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get('http://localhost:8000/api/users-actions/' + id)
  //     .then((res) => res.data)
  //     .then((data) => setUsers(data));
  //     axios
  //     .post('http://localhost:8000/api/users/' + id)
  //     .then((res) => res.data)
  //     .then((data) => setUsers(data));
  // }, [id]);



  return (
    <div>
      <Navbar className="details-navBar" />
      <div className="eventDetails-container">
        <div className="details-map">map</div>

        <div className="details-items">
          <div className="details-top">
            <h1>{eventDetails.title}</h1>
          </div>
          <div className="details-top-info">
            <p>
              Catégorie :{' '}
              <span className="category-type">{eventDetails.type}</span>
            </p>
            <p>crée par {eventDetails.author}</p>
          </div>
          <hr></hr>
          <div className="details-bottom">
            <p>{eventDetails.start_date}</p>
            <p>{eventDetails.start_hour}</p>

            <div className="details-adress">
              <p>
                {eventDetails.street_number} {eventDetails.street_name}
              </p>
              <p className="details-city">
                {eventDetails.city}, {eventDetails.zip_code},{' '}
                {eventDetails.country}
              </p>
            </div>
          </div>

          <hr></hr>
          <div className="details-description">
            <p className="details-description-text">description : </p>
            <p>{eventDetails.description}</p>
            {/* <p>{eventDetails.x_coor}</p>
            <p>{eventDetails.y_coor}</p> */}
          </div>
          <hr className="last-hr"></hr>
        </div>
        <div className="details-players">
          <button
            onClick={handleClick}
            className={isParticipate ? 'unsubscribe' : 'green-btn subscribe'}
          >
            {isParticipate ? 'Inscris' : 'Participer'}
          </button>

          <div className="players-list">
            <div className="players-number">
              <span className="nombre-de">nombre de participants :</span>
              <span> 6{/*{eventDetails.users.length}*/}</span>
            </div>

            {/* <div className="players-list-name">
          {users
          .map((user) => (
            <div className="player-item">
              <p>{user.name}</p>
            </div>
          ))}
        </div> */}

            <div className="players-list-name">
              <p className="player-item">john</p>
              <p className="player-item">Koko</p>
              <p className="player-item">Jojo</p>
              <p className="player-item">Lolo</p>
              <p className="player-item">Toto</p>
              <p className="player-item">Soso</p>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};
