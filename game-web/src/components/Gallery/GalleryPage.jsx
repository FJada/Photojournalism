import React from 'react';
import MiniBrowser from '../minibrowser/mini-browser';
import './styles.css';

import arcade2 from '../../assets/gallery/arcade2.jpg';
import arcade3 from '../../assets/gallery/arcade3.jpg';
import campaigngame from '../../assets/gallery/campaign-game.jpg';
import chess2 from '../../assets/gallery/chess2.jpg';
import chess3 from '../../assets/gallery/chess3.jpg';
import conversing from '../../assets/gallery/conversing.jpg';
import friendlygame from '../../assets/gallery/friendlygame1.jpg';
import online from '../../assets/gallery/online.jpg';
import os1 from '../../assets/gallery/os1.jpg';
import os2 from '../../assets/gallery/os2.jpg';
import screens from '../../assets/gallery/screens.jpg';
import screens2 from '../../assets/gallery/screens2.jpg';
import tiles2 from '../../assets/gallery/tiles2.jpg';
import uncommons1 from '../../assets/gallery/uncommons1.jpg';
import uncommons2 from '../../assets/gallery/uncommons2.jpg';
import online2 from '../../assets/gallery/online2.jpg';
import duo from '../../assets/gallery/duo.jpg';
import solo1 from '../../assets/gallery/solo1.jpg';

const Gallery = () => {
  return (
    <div>
      <MiniBrowser>
        <div className="gallery">
          <div className="row">
            <div className="column">
              <img src={arcade2} alt="Image 1" />
              <p>Caption for Image 1</p>
            </div>
            <div className="column">
              <img src={arcade3} alt="Image 2" />
              <p>Caption for Image 2</p>
            </div>
            <div className="column">
              <img src={campaigngame} alt="Image 3" />
              <p>Caption for Image 3</p>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <img src={chess2} alt="Image 4" />
              <p>Caption for Image 4</p>
            </div>
            <div className="column">
              <img src={chess3} alt="Image 5" />
              <p>Caption for Image 5</p>
            </div>
            <div className="column">
              <img src={conversing} alt="Image 6" />
              <p>Caption for Image 6</p>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <img src={friendlygame} alt="Image 7" />
              <p>Caption for Image 7</p>
            </div>
            <div className="column">
              <img src={online} alt="Image 8" />
              <p>Caption for Image 8</p>
            </div>
            <div className="column">
              <img src={os1} alt="Image 9" />
              <p>Caption for Image 9</p>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <img src={os2} alt="Image 10" />
              <p>Caption for Image 10</p>
            </div>
            <div className="column">
              <img src={screens} alt="Image 11" />
              <p>Caption for Image 11</p>
            </div>
            <div className="column">
              <img src={screens2} alt="Image 12" />
              <p>Caption for Image 12</p>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <img src={uncommons1} alt="Image 13" />
              <p>Caption for Image 13</p>
            </div>
            <div className="column">
              <img src={uncommons2} alt="Image 14" />
              <p>Caption for Image 14</p>
            </div>
            <div className="column">
              <img src={tiles2} alt="Image 15" />
              <p>Caption for Image 15</p>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <img src={duo} alt="Image 13" />
              <p>Caption for Image 13</p>
            </div>
            <div className="column">
              <img src={solo1} alt="Image 14" />
              <p>Caption for Image 14</p>
            </div>
            <div className="column">
              <img src={online2} alt="Image 15" />
              <p>Caption for Image 15</p>
            </div>
          </div>
        </div>
      </MiniBrowser>
    </div>
  );
};

export default Gallery;
