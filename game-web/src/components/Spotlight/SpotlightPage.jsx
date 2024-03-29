import React from 'react';
import MiniBrowser from '../minibrowser/mini-browser';
import './styles.css';  

import groupGame from '../../assets/present/group-game.jpg'; 
import arcade1 from '../../assets/present/arcade 1.jpg'; 
import cards1 from '../../assets/present/cards 1.jpg'; 
import cards2 from '../../assets/present/cards 2.jpg'; 
import chess1 from '../../assets/present/chess1.png'; 
import gatcha from '../../assets/present/gatcha.jpg'; 
import tiles1 from '../../assets/present/tiles 1.jpg'; 


const Spotlight = () => {
  return (
    <div>
     
      <MiniBrowser>
       
        <p>This is the spotlight page </p>

        <div className="gallery">
      <div className="row">
        <div className="column">
          <img src={groupGame}  />
          <p>Group of men watch as a pair play an intense game at Chinatown Park</p>
        </div>
        <div className="column">
          <img src={arcade1}  />
          <p>Inside an empty arcade</p>
        </div>
        <div className="column">
          <img src={tiles1} />
          <p> A closeup of a game using tiles </p>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <img src={cards1}  />
          <p>Group playing card games in Chinatown Park</p>
        </div>
        <div className="column">
          <img src={chess1}  />
          <p>Man spectates an intense match of chess in Washington Square park </p>
        </div>
        <div className="column">
          <img src={cards2} />
          <p>Group of ladies plaing cards in Chinatown park</p>
        </div>
      </div>
    </div>
    <div className="text-column">
      {/* Text content for the right column */}
      <p></p>
    </div>
      </MiniBrowser>
    </div>
  );
};

export default Spotlight;