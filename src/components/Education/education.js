import React from "react";
import rguktlogo from "../../assets/Files/rguktlogo.png";


const Education = () => {
  const handleClick = () => {
    window.open("https://rguktn.ac.in/", "_blank", "noopener,noreferrer");
  };
  return (
    <div className="education" id="education">
      <div className="education-header">
        <p>Education</p>
      </div>
      <div className="educationDetails">
        <div className="education-content" onClick={handleClick}>
        <img src={rguktlogo} alt="CollegeLogo" className="rgukt-logo" />
        <div className="content-text">
          <span className="edu-header">
            Bachelor of Technology in Computer Science and Engineering
          </span>
          <span className="college">
            Rajiv gandhi University of Knowledge Technologies,Nuzvid
          </span>
          <span className="timeline">2018-2022</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;

        // <div className="education-content">
        // <img src={rguktlogo} alt="CollegeLogo" className="rgukt-logo" />
        // <div className="content-text">
        //   <span className="edu-header">Pre University Course in MPC</span>
        //   <span className="college">
        //     Rajiv gandhi University of Knowledge Technologies,Nuzvid
        //   </span>
        //   <span className="timeline">2016-2018</span>
        //   </div>
        // </div>
