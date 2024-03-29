import React from 'react';
import MiniBrowser from '../minibrowser/mini-browser';
import profile from '../../assets/IMG_2018.jpeg'; 
import './styles.css';
 
const About = () => {
  return (
    <div>
      <MiniBrowser>
        <div className="about-content">
          <div className="image-column">
            <img src={profile}  style={{ width: '90%', height: 'auto' }} />
          </div>
          <div className="text-column">
            <p>
              I decided to explore the topic of gaming and third-spaces because i myself utilize games as a way to 
              find community, and make friends with common interests. With the recent emergence of the term "third spaces", i thought
              it important to explore what that means for people, and how it may connect to gaming. According to Brookings, "Third 
              places is a term coined by sociologist Ray Oldenburg and refers to places where people spend time between home 
              (‘first’ place) and work (‘second’ place)." This does not mean that groceries stores, and other spaces where people conduct business or errands
              are thrid spaces, however. Third spaces are spaces in which people go for lesuire, "Oldenburg notes, the most effective ones for building real community seem to be physical places where people can easily and routinely connect with each other: churches, parks, recreation centers, hairdressers, gyms..."
              Thus third spaces are places wherein which there are affordances for community building and socialization, or engagement in hobbies or activities. 

              
            </p>

            <p>Sources: <a href="https://www.brookings.edu/articles/third-places-as-community-builders/">Brookings</a></p>


          </div>
        </div>
      </MiniBrowser>
    </div>
  );
};

export default About;
