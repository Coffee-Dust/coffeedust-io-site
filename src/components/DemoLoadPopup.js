import React from 'react';
import { ReactComponent as CoffeeMachineSVG} from '../assets/coffeemachine.svg'
import AnalyticsReporter from '../data/analytics-reporter';

function DemoLoadPopup({port, url, projectName, setDemoIsLoadingOnPort}) {

  const demoServerURL = `${url}:${port}`

  const [isLoaded, setIsLoaded] = React.useState(false);

  const redirectToDemo = _=> {
    AnalyticsReporter.reportEvent("projectDemoVisit", {projectName: projectName})
    setDemoIsLoadingOnPort(false)
    window.location.href = demoServerURL
  }

  let checkInstanceIsLoadedInterval;
  let isLoadedAttempts = 0

  const checkInstanceIsLoaded = async _=> {
    try {
      await fetch(demoServerURL)
      setIsLoaded(true)
      clearInterval(checkInstanceIsLoadedInterval)
      let timeoutTime = 4000 - (isLoadedAttempts * 100)
      setTimeout(redirectToDemo, timeoutTime)
    } catch (error) {
      isLoadedAttempts += 1
      if (isLoadedAttempts > 500) {
        clearInterval(checkInstanceIsLoadedInterval)
        setDemoIsLoadingOnPort(false)
        alert("Uh Oh... I had trouble starting that demo. Please try again.")
      }
    }
  }

  React.useEffect(_=> {
    checkInstanceIsLoadedInterval = setInterval(checkInstanceIsLoaded, 100)
    return _=> {
      clearInterval(checkInstanceIsLoadedInterval)
    };
  }, []);

  return (
    <div className="Projects-demo-load-popup">
      <h2>The interactive demo is {(isLoaded) ? "loaded!" : "brewing (loading)"}</h2>
      <h3>You will be redirected shortly.</h3>
      <CoffeeMachineSVG />
    </div>
  );
}

export default DemoLoadPopup;
