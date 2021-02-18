import React from "react";
import "./Skill.css";

function Skill({ name, value }) {
  return (
    <div className="skill">
      <div className="skill__name">{name}</div>
      <div className="skill__progress">
        <div
          className="skill__progressBar"
          style={{ width: value + "%" }}
        ></div>
        <span className="skill__progressValue">{`${value}%`}</span>
      </div>
    </div>
  );
}

export default Skill;
