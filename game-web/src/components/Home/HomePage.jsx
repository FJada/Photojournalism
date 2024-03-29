import React from 'react';
import MiniBrowser from '../minibrowser/mini-browser';
import gatcha from '../../assets/present/gatcha.jpg'
 const Home = () => {
  return (
    <div>
     
      <MiniBrowser>
       
        <p>Welcome to the Exploration of Gaming as Third Space </p>
        <div className="column">
        <img src={gatcha} style={{ width: '80%', display: 'inline-block', height: 'auto'  }}/>
        </div>
        
      </MiniBrowser>
    </div>
  );
};

export default Home;
