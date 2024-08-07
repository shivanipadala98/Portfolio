import React from "react";
import SkillCard from "./skillCard";
import reactLogo from "../../assets/Files/react.png";
import nodeLogo from "../../assets/Files/node.png";
import expressLogo from "../../assets/Files/ExpressJsLogo.png";
import javascript from "../../assets/Files/javaScript.png";
import html from "../../assets/Files/htmlLogo.png";
import css from "../../assets/Files/cssLogo.png";
import sql from "../../assets/Files/sqlLogo.png";
import mysql from "../../assets/Files/mySQLLogo.png";
import git from "../../assets/Files/gitLogo.png";
import postman from "../../assets/Files/postManLogo.png";

const skills = [
  { name: "REACT", image: reactLogo },
  { name: "NODE", image: nodeLogo },
  { name: "EXPRESS", image: expressLogo },
  { name: "JAVASCRIPT", image: javascript },
  { name: "HTML", image: html },
  { name: "CSS", image: css },
  { name: "SQL", image: sql },
  { name: "MySQL", image: mysql },
  { name: "GIT", image: git },
  { name: "POSTMAN", image: postman },
];

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <div className="skills-header">
        <p>Skills</p>
      </div>
      <div className="skillsList">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
