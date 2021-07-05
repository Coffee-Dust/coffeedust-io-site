import React from 'react';
import gitHubLogo from '../assets/GitHub-Logo.png';

function ProjectDetails(props) {

  const startDemo = event=> {

  }

  const goToRepo = event=> {

  }

  return (
    <div className="Project-details">
      <button className="close" 
      onClick={e=> {
        e.currentTarget.parentNode.classList.add("closing")
        setTimeout(_=> props.closeDetails(e), 500)
      }}
      >x</button>
      <img src={require(`./../assets/project_icons/${props.id}_icon.png`).default} alt="" />
      <h2>{props.name}</h2>
      <div className="links">
        {
          (props.repo) ? <button className="repo" onClick={goToRepo}> <img src={gitHubLogo} /> github repo</button> : null
        }
        {
          (props.demo) ? <button className="demo" onClick={startDemo}>Launch Interactive Demo</button> : null
        }
      </div>
      <p>{props.desc}</p>
    </div>
  );
}

export default ProjectDetails;
