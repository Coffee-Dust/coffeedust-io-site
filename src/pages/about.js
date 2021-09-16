import React from 'react';
import '../assets/css/AboutPage.css'
import stackKnawledgeDesc from '../data/knawledge_stack_desc'

function AboutPage() {
  const [displayedKnawledgeID, setDisplayedKnawledgeID] = React.useState("ruby");
  const displayKnawledge = event=> setDisplayedKnawledgeID(event.currentTarget.id)

  const CodeIcon = props=> (
    <img id={props.id} src={require(`./../assets/code_icons/${props.id}.png`).default} alt="click to view more" onClick={displayKnawledge} className={(displayedKnawledgeID === props.id) ? "active" : ""}/>
  )

  return (
    <div className="Page-content">
      <h1>$ whoami</h1>

      <article className="Page-about">
        <img className="my-face" alt="My face" src={require(`./../assets/my_face.jpg`).default}/>
        <h2>Hi! <br/><br/> I'm John Dust,</h2>
        <p className="intro">
          A positive, fun and helpful <em>Full Stack Web and iOS Developer</em> with a passion for <em>coffee</em> ☕️ and nearly 4 years of independent development experience. <br/>
          I love to meet new people, solve problems and <em>write innovative code</em> that is semantic, organized and efficient.<br/>
          <br/>
        </p>

        <div id="diploma">
          <figure>
            <img src={require("./../assets/diploma.png").default} alt="My Certificate of Completion" />
            <figcaption>I'm also a graduate from <a href="https://flatironschool.com/about-flatiron-school/" target="_blank" rel="noreferrer">Flatiron School</a></figcaption>
          </figure>
        </div>

        <section className="knawledge background-blur">
          <h2>My knowledge stack</h2>
          <div className="icon-list langs">
            <CodeIcon id="ruby" />
            <CodeIcon id="js"/>
            <CodeIcon id="swift" />
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
