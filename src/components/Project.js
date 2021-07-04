import React from 'react';
import gitHubLogo from '../assets/GitHub-Logo.png'

function Project(props) {

  const startDemo = event=> {

  }

  const goToRepo = event=> {

  }

  return (
    <div className="Project-app-div" style={{"--animation-order": `${props.animationPos}`}}>
      <div className="icon-shadow"></div>
      <img src={require(`./../assets/project_icons/${props.id}_icon.png`).default} alt="" />

      <div className={`Project-info`} hidden={props.opened}>
        <h2>{props.name}</h2>
        <div className="links">
          <button className="repo" onClick={goToRepo}> <img src={gitHubLogo} /> repo</button>
          <button className="demo" onClick={startDemo}>Live Demo</button>
        </div>
        <p>{props.desc}</p>
      </div>
    </div>
  );
}

export default Project;