import React from "react";
import profileImage from "../../assets/Files/portfolio_profile.jpeg";
import Typewriter from "typewriter-effect";
import AboutMe from "../AboutMe/aboutMe";
import AboutMeText from "../AboutMe/aboutMeText";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHandPeace } from '@fortawesome/free-solid-svg-icons';

const introductionInformation = {
  greeting: "Hey there",
  name: "I'm Lakshmi Sivani Padala",
  profession: "Passionate Software Developer",
};

const Home = () => {
  
  return (
    <div className="home-page" id="home">
      <div className="home-intro">
        <div className="introduction">
          <h5 className="greeting">{introductionInformation?.greeting}!!<span role="img" aria-label="wave" style={{ fontSize: '2rem', "padding-left": '1rem' }} className="wave-hand">👋</span></h5>
          <h1 className="intro-name">{introductionInformation?.name}</h1>
          <h3 className="intro-prof">
            <Typewriter
              options={{
                strings: introductionInformation?.profession,
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </h3>
          <p className="prof-withoutType">Passionate Software Developer</p>
          <AboutMe/>
        </div>
        <div>
        <div className="image-container">
        <img src={profileImage} alt="Profile" className="profile-image" />
          <div className="square square-top"></div>
          <div className="square square-bottom"></div>
        </div>
        </div>
      </div>
      <AboutMeText/>
    </div>
  );
};

export default Home;
