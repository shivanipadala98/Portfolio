import React from "react";

function SkillCard({ skill }) {
  return (
    <div className="skillCard">
      <img src={skill.image} alt={skill.name} className="skillImg"/>
      <p className="skillName">{skill.name}</p>
    </div>
  );
}

export default SkillCard;
