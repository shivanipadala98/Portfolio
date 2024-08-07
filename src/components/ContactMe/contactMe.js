import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import AboutMe from "../AboutMe/aboutMe";

const ContactMe = () => {
  return (
    <div className="contactMe" id="contactMe">
      <div className="contactMe-content">
        <span>
          <FontAwesomeIcon
            icon={faCopyright}
            size="xl"
            style={{ color: "#000000" }}
          />
          2024-Sivani Padala
        </span>
        <AboutMe />
      </div>
    </div>
  );
};

export default ContactMe;
