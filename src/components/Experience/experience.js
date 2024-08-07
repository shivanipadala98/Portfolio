import React from "react";
import veltris from "../../assets/Files/veltris_logo.jpeg";

const experience = [
  {
    logo: veltris,
    company: "Veltris",
    designation: "Software Developer",
    timeline: "Jan 2022 - Present",
    location: "Hyderabad,Telangana",
    description: [
    "Developed user-friendly interfaces using React JS based on user preferences.",
    "Developed reusable components to streamline development workflows and promote code reusability.",
    "Built server-side logic and APIs using Node.js and ExpressJS.",
    "Implemented database queries using SQL and MySQL.",
    "Developed test suites for APIs using Mocha and Chai, and for UI functionality using Jest, to ensure performance and quality.",
    "Conducted code reviews to ensure code quality, readability, and maintainability.",
    "Proactively addressed and resolved front-end-related and back-end-related bugs.",
    "Documented RESTful APIs using Swagger, creating comprehensive, interactive, and easy-to-understand API documentation.",
    "Created and maintained user stories, ensuring alignment with project objectives and facilitating effective communication with the team.",
    "Participated in scrum meetings, including daily stand-ups,sprint planning, and retrospective sessions, ensuring effective communication and project progress tracking.",
    ],
  },
];

const Experience = () => {
  const handleClick = () => {
    window.open("https://www.veltris.com/", "_blank", "noopener,noreferrer");
  };
  return (
    <div className="experience" id="experience">
      <div className="experience-header">
        <p>Experience</p>
      </div>
      <div>
        {experience.map((experience, index) => {
          return (
            <div className="experience-card">
              <div className="experienceDetails" onClick={handleClick}>
                <img src={experience.logo} alt={experience.companyName} className="exp-logo"/>
                <div className="content-text">
                <span className="exp-header">
                  {experience.designation}
                </span>
                <span className="company">
                  {experience.company}-{experience.location}
                </span>
                <span className="timeline">{experience.timeline}</span>
                </div>
              </div>
              <div className="pt-4 list">
              <ul className="list-description">
                {experience.description.map((description, index) => {
                  return (
                    <li key={index} className="sm:text-m">
                      {description}
                    </li>
                  );
                })}
              </ul>
            </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
