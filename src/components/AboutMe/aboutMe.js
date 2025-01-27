import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Resume from "../../assets/Files/sivani_resume.pdf";

const AboutMe = () => {
  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = Resume;
    link.download = "Sivani's_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="aboutMe" id="aboutMe">
      <div className="social-media-icons">
        <a
          href="mailto:shivanipadala98@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            size="2xl"
            style={{ color: "#000000" }}
          />
        </a>
        <a
          href="https://github.com/shivanipadala98"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faGithub}
            size="2xl"
            style={{ color: "#000000" }}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/shivani-padala-b464b7204/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            size="2xl"
            style={{ color: "#000000" }}
          />
        </a>
        <button
          type="button"
          className="btn btn-dark"
          onClick={handleResumeDownload}
        >
          <FontAwesomeIcon icon={faDownload} />
          <span className="resumeBtn"> Resume</span>
        </button>
      </div>
    </div>
  );
};

export default AboutMe;
