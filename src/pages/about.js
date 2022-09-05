import React from 'react';
import '../assets/css/github-calendar-responsive.css'
import '../assets/css/AboutPage.css'
import stackKnawledgeDesc from '../data/knawledge_stack_desc'
import GitHubCalendar from 'github-calendar'

function AboutPage() {
  const [displayedKnawledgeID, setDisplayedKnawledgeID] = React.useState("ruby");
  const displayKnawledge = event=> setDisplayedKnawledgeID(event.currentTarget.id)

  const CodeIcon = props=> (
    <img id={props.id} src={require(`./../assets/code_icons/${props.id}.png`).default} alt="click to view more" onClick={displayKnawledge} className={(displayedKnawledgeID === props.id) ? "active" : ""}/>
  )
  React.useEffect(_=> GitHubCalendar(".calendar", "Coffee-Dust", {responsive: true, global_stats: false}),[])
  return (
    <div className="Page-content">
      <h1>$ whoami</h1>

      <article className="Page-about">
        <img className="my-face" alt="My face" src={require(`./../assets/my_face.jpg`).default}/>
        <h2>Hi! <br/><br/> I'm John Dust,</h2>
        <p className="intro">
          A self-taught, fun and detail oriented <em>Software Engineer</em> that has a love for helping others, oh and also for <em>coffee</em> ☕️!<br/>
          I have been programming for over <em>6 years</em> combined and I am passionate about writing reusable, semantic and organized code.<br/>
          I am also the creator of the iOS mobile game,<br/> <em><a href="https://virtually.coffee/virtually8bit">Virtually 8-bit!</a></em>
        </p>

        {/* <div id="diploma">
          <figure>
            <img src={require("./../assets/diploma.png").default} alt="My Certificate of Completion" />
            <figcaption>I'm also a graduate from <a href="https://flatironschool.com/about-flatiron-school/" target="_blank" rel="noreferrer">Flatiron School</a></figcaption>
          </figure>
        </div> */}
        
        <div className="calendar-container">
          <p><em>But don't just take my word for it, checkout my GitHub activity below!</em></p>
          <a className="calendar" href="https://github.com/Coffee-Dust" target="_blank" rel="noreferrer">contribs go here</a>
        </div>

        <section className="knawledge background-blur">
          <h2>My knowledge stack</h2>
          <div className="icon-list langs">
            <CodeIcon id="swift" />
            <CodeIcon id="js"/>
            <CodeIcon id="ruby" />
          </div>
          <div className="icon-list techs">
            <CodeIcon id="rails" />
            <CodeIcon id="react" />
            <CodeIcon id="html" />
          </div>

          <div className="knawledge-desc">
            {stackKnawledgeDesc[displayedKnawledgeID]}
          </div>
        </section>
      </article>
    </div>
  );
}

export default AboutPage;
