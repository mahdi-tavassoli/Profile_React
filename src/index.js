// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// function App() {
//   return (
//     <div className="card">
//       <Avatar />
//       <div className="data">
//         <Introduction />
//         <Skill_list />
//       </div>
//     </div>
//   );
// }
// function Avatar() {
//   return (
//     <img className="avatar" src="jonas.jpeg" alt="Jonas Schmedtmann"></img>
//   );
// }
// function Introduction() {
//   return (
//     <main>
//       <h1>Mahdi Tavassoli</h1>
//       <p>
//         Full-stack web developer and teacher at Udemy. When not coding or
//         preparing a course, I like to play board games, to cook (and eat), or to
//         just enjoy the Portuguese sun at the beach.
//       </p>
//     </main>
//   );
// }
// function Skill_list() {
//   return (
//     <div className="skill-lists">
//       <Skill skill="React" emoji="👶" Color="blue" />
//       <Skill skill="Html+Css" emoji="💪" Color="red" />
//       <Skill skill="Git hub" emoji="👶" Color="orange" />
//       <Skill skill="Java" emoji="💪" Color="green" />
//       <Skill skill="C++" emoji="👶" Color="yellow" />
//     </div>
//   );
// }
// function Skill(props) {
//   return (
//     <div className="skill" style={{ backgroundColor: props.Color }}>
//       <span>{props.skill}</span>
//       <span>{props.emoji}</span>
//     </div>
//   );
// }
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
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
    <div className="skill-lists ">
      <Skill skill="React" emoji="👶" Color="blue" />
      <Skill skill="Html+Css" emoji="💪" Color="red" />
      <Skill skill="Git hub" emoji="👶" Color="orange" />
      <Skill skill="Java" emoji="💪" Color="green" />
      <Skill skill="C++" emoji="👶" Color="yellow" />
    </div>
  );
}
function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.Color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
