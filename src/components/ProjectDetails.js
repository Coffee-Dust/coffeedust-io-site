import React from 'react';
import gitHubLogo from '../assets/GitHub-Logo.png';

function ProjectDetails(props) {

  const startDemo = event=> {

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
          (props.repo) ? <a className="repo" href={props.repo} target="_blank"><button> <img src={gitHubLogo} /> github repo</button></a> : null
        }
        {
          (props.demo) ? <button className="demo" onClick={startDemo}>Launch Interactive Demo</button> : null
        }
      </div>
      <p>{props.desc}</p>

      <div className="screenshots"></div>
    </div>
  );
}

export default ProjectDetails;
