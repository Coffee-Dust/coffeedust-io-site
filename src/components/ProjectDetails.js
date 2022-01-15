import React from 'react';
import gitHubLogo from '../assets/GitHub-Logo.png';
import DemoLoadPopup from './DemoLoadPopup';
import coffeeMachineSound from '../assets/coffee_machine.mp3'
import AnalyticsReporter from '../data/analytics-reporter';

function ProjectDetails(props) {
  const demoServerURL = "https://demo.dust.coffee"

  const [demoIsLoadingOnPort, setDemoIsLoadingOnPort] = React.useState(false);

  const [demoServerIsRunning, setDemoServerIsRunning] = React.useState(false);

  let checkDemoServerIsRunningInterval;
  let checkDemoServerAttempts = 0;

  const checkDemoServerIsRunning = async _=> {
    try {
      await fetch(demoServerURL + "/ping")
      setDemoServerIsRunning(true)
      clearInterval(checkDemoServerIsRunningInterval)
    } catch (error) {
      checkDemoServerAttempts += 1
      if (checkDemoServerAttempts > 50) {
        clearInterval(checkDemoServerIsRunningInterval)
      }
    }
  }

  React.useEffect(_=> {
    checkDemoServerIsRunningInterval = setInterval(checkDemoServerIsRunning, 500)
    return _=> {clearInterval(checkDemoServerIsRunningInterval)}
  }, [])


  const startDemo = _=> {
    AnalyticsReporter.reportEvent("projectDemoStart", {projectName: props.name})
    const brewSound = new Audio(coffeeMachineSound)
    brewSound.volume = 0.4
    brewSound.play()

    fetch(demoServerURL + "/projects/start?project_name=" + props.id)
    .then(prom => (prom.status === 200) ? prom.json() : alert("UH OH! the demo server did not response in your favor!"))
    .then(resp=> setDemoIsLoadingOnPort(resp.instancePort))
    .catch(e=> alert("UH OH! the demo server does not appear to be on 😬", e))
  }

  React.useEffect(_=> AnalyticsReporter.reportEvent("projectDetailsClick", {projectName: props.id}), [props.name])

  return (
    <div className="Project-details">

      {(demoIsLoadingOnPort) ? <DemoLoadPopup port={demoIsLoadingOnPort} url={demoServerURL} projectName={props.id} setDemoIsLoadingOnPort={setDemoIsLoadingOnPort} /> : null}

      <button className="close" 
      onClick={e=> {
        e.currentTarget.parentNode.classList.add("closing")
        setTimeout(_=> props.closeDetails(e), 500)
      }}>x</button>

      <img src={require(`./../assets/project_icons/${props.id}_icon.png`).default} alt="" />
      <h2>{props.name}</h2>
      <div className="links">
        {
          (props.repo) ? <a className="repo" href={props.repo} target="_blank" rel="noreferrer"><button> <img src={gitHubLogo} /> <span>github repo</span></button></a> : null
        }

        {
          (props.demo) ? 
            (props.CLI) ?
              <a href={demoServerURL + "/virtual_terminal/new?project_name=" + props.id} target="_blank" rel="noreferrer"><button className="demo">Launch Interactive Demo</button></a>
            :
              <button className="demo" onClick={startDemo} disabled={!demoServerIsRunning}>Launch Interactive Demo</button>
          : 
            null
        }
      </div>
      <p>{props.desc}</p>
      
      {(props.screenshotCaptions) ? 
        <section id="screenshots">
          <h2>Screen-shots</h2>
          <h4><em>(scrollable 👉)</em></h4>
          <div className="screenshots-container">
            {props.screenshotCaptions.map((caption, idx)=> (
              <figure>
                <img src={require(`./../assets/project_screenshots/${props.id}/${idx}.PNG`).default} alt={caption} />
                <figcaption>{caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      :
        null
      }
    </div>
  );
}

export default ProjectDetails;
