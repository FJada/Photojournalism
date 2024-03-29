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










 const Gallery = () => {
  return (
    <div>
     
      <MiniBrowser>
       
      <div class="gallery">
  <div class="row">
    <div class="column">
      <img src="image1.jpg" alt="Image 1" />
      <p>Caption for Image 1</p>
    </div>
    <div class="column">
      <img src="image2.jpg" alt="Image 2" />
      <p>Caption for Image 2</p>
    </div>
    <div class="column">
      <img src="image3.jpg" alt="Image 3" />
      <p>Caption for Image 3</p>
    </div>
  </div>
  <div class="row">
    <div class="column">
      <img src="image1.jpg" alt="Image 1" />
      <p>Caption for Image 1</p>
    </div>
    <div class="column">
      <img src="image2.jpg" alt="Image 2" />
      <p>Caption for Image 2</p>
    </div>
    <div class="column">
      <img src="image3.jpg" alt="Image 3" />
      <p>Caption for Image 3</p>
    </div>
  </div>
  <div class="row">
    <div class="column">
      <img src="image1.jpg" alt="Image 1" />
      <p>Caption for Image 1</p>
    </div>
    <div class="column">
      <img src="image2.jpg" alt="Image 2" />
      <p>Caption for Image 2</p>
    </div>
    <div class="column">
      <img src="image3.jpg" alt="Image 3" />
      <p>Caption for Image 3</p>
    </div>
  </div>
</div>
      </MiniBrowser>
    </div>
  );
};

export default Gallery;
