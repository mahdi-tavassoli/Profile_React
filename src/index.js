import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];
function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}
function Avatar() {
  return (
    <img
      className="avatar"
      src="mahdi-tavassoli.jpg"
      alt="Mahdi Tavassoli"
    ></img>
  );
}
function Intro() {
  return (
    <div>
      <h1>Mahdi Tavassoli</h1>
      <p>
        I am Mahdi Tavassoli. I am originally from Afghanistan but I am living
        in Iran. I am studing computer engineering in University Of Isfahan. I
        am intersted in web designing and these days, I am learning React from
        Udemy and Jonas's React course. I am always wanted to be a Full-Stack
        developer.
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-lists">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
      {/* <Skill skill="React" emoji="👶" Color="blue" />
      <Skill skill="Html+Css" emoji="💪" Color="red" />
      <Skill skill="Git hub" emoji="👶" Color="orange" />
      <Skill skill="Java" emoji="💪" Color="green" />
      <Skill skill="C++" emoji="👶" Color="yellow" /> */}
    </div>
  );
}
function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>{level === "advanced" && "💪"}</span>
      <span>{level === "intermediate" && "👍"}</span>
      <span>{level === "beginner" && "👶"}</span>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
