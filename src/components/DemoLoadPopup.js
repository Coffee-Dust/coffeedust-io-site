import React from 'react';
import { ReactComponent as CoffeeMachineSVG} from '../assets/coffeemachine.svg'

function DemoLoadPopup({port, url}) {

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
      <h2>Demo Instance Status: {(isLoaded) ? "Ready!" : "Brewing"}</h2>
      <CoffeeMachineSVG />
      <a href={demoServerURL} target="_blank" rel="noreferrer" disabled={!isLoaded}><button disabled={!isLoaded}>go to demo instance</button></a>
    </div>
  );
}

export default DemoLoadPopup;