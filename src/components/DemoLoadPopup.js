import React from 'react';
import { ReactComponent as CoffeeMachineSVG} from '../assets/coffeemachine.svg'
import AnalyticsReporter from '../data/analytics-reporter';

function DemoLoadPopup({port, url, projectName, setDemoIsLoadingOnPort}) {

  const demoServerURL = `${url}:${port}`

  const [isLoaded, setIsLoaded] = React.useState(false);

  (async function checkInstanceIsLoaded() {
    try {
      await fetch(demoServerURL)
      setIsLoaded(true)
    } catch (error) {
      console.log("Instance is not loaded yet! Trying again", error)
      await checkInstanceIsLoaded()
    }
  })()

  return (
    <div className="Projects-demo-load-popup">
      <h2>The interactive demo is {(isLoaded) ? "loaded!" : "brewing (loading)"}</h2>
      <h3>You will be redirected shortly.</h3>
      <CoffeeMachineSVG />
      <a href={demoServerURL} target="_blank" rel="noreferrer" disabled={!isLoaded} onClick={_=> AnalyticsReporter.reportEvent("projectDemoVisit", {projectName: projectName})}>
        <button disabled={!isLoaded}>go to demo instance</button>
      </a>
    </div>
  );
}

export default DemoLoadPopup;
