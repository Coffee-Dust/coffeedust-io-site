import React from 'react';
import gitHubLogo from '../assets/GitHub-Logo.png';
import DemoLoadPopup from './DemoLoadPopup';
import coffeeMachineSound from '../assets/coffee_machine.mp3'

function ProjectDetails(props) {
  const demoServerURL = "http://localhost:9292"

  const [demoIsLoadingOnPort, setDemoIsLoadingOnPort] = React.useState(false);

  const startDemo = event=> {
    const brewSound = new Audio(coffeeMachineSound)
    brewSound.volume = 0.4
    brewSound.play()

    fetch(demoServerURL + `?PROJECT_NAME=${props.id}`)
    .then(prom => (prom.status === 200) ? prom.json() : alert("UH OH! the demo server did not response in your favor!"))
    .then(resp=> setDemoIsLoadingOnPort(resp.instancePort))
    .catch(e=> alert("UH OH! the demo server does not appear to be on 😬", e))
  }


  return (
    <div className="Project-details">
      {(demoIsLoadingOnPort) ? <DemoLoadPopup port={demoIsLoadingOnPort} {...props} /> : null}
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
          (props.repo) ? <a className="repo" href={props.repo} target="_blank" rel="noreferrer"><button> <img src={gitHubLogo} /> github repo</button></a> : null
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
