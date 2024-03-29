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
              Research about the intersectuality between third spaces and gaming, find that many young people use online gaming communities as their
              vesion of community building. This is not unexpected with the rise of online streaming platforms like Twitch, Tiktok, Youtube, allow for content creators to stream
              gaming content and gain followers. In a paper, The new third place: Massively multiplayer online gaming in American youth culture by Constance Steinkuehler, she argues "that massively multiplayer online games (MMOGs) 
              function as one novelform of a new “third place” for informal sociability. 
              Based on data collected as part of an ongoing two-year  virtual   cognitive ethnography of the game  Lineage  (first  I,  now II), I outline how  the features ofMMOG digital worlds satisfy Oldenburg’s (1999) defining criteria for the very sorts of third places “realworld” America sorely lacks.""
              Why online gaming specifically, Andrew Fishman addresses this in an article "Why So Many Teens Use Video Games to Meet Others", and claims that some causes are due to a lack of accessibility in reaching physical thrid spaces, social anxiety, and digital customization of personas allowing young people to reach many
               other people from the comfort of their own home on their terms. In the Forbes article, "The Third Space", by Mark Nevins he states that people should be intentional with the incorporation of engaging in your thirdspace, using gaming people can develop their skills in their respective games. 
            </p>

            <p>Sources: <a href="https://www.brookings.edu/articles/third-places-as-community-builders/">Brookings</a>
             </p>

            <p>
            <a href="https://www.researchgate.net/publication/288865331_The_new_third_place_Massively_multiplayer_online_gaming_in_American_youth_culture"> Constance Steinkuehler </a>
            </p>
            <p>
            <a href="https://www.psychologytoday.com/us/blog/video-game-health/202303/why-so-many-teens-use-video-games-to-meet-others">Andrew Fishman  </a>
            </p>

            <p>
            <a href="https://www.forbes.com/sites/hillennevins/2021/10/14/the-third-space/?sh=3a84bbfd686a">Forbes </a>
            </p>
            <p>
            <a href="https://academic.oup.com/jcmc/article/11/4/885/4617703">Where Everybody Knows Your (Screen) Name: Online Games as “Third Places”</a>
            </p>

          </div>
        </div>
      </MiniBrowser>
    </div>
  );
};

export default About;
