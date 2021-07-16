import React from 'react';
import '../assets/css/AboutPage.css'

function AboutPage() {
  const [displayedKnawledgeID, setDisplayedKnawledgeID] = React.useState("ruby");
  const displayKnawledge = event=> setDisplayedKnawledgeID(event.currentTarget.id)

  const CodeIcon = props=> (
    <img id={props.id} src={require(`./../assets/code_icons/${props.id}.png`).default} alt="click to view more" onClick={displayKnawledge} />
  )

  return (
    <div className="Page-content">
      <h1>$ whoami</h1>

      <article className="Page-about">
        <img className="my-face" alt="My face" src={require(`./../assets/my_face.jpg`).default}/>
        <h2>Hi! I'm John Dust,</h2>
        <p className="intro">A software engineer with a passion for <em>coffee</em> ☕️ <br/>that is experienced in <em>Full Stack Web Development</em>, <em>Game Design</em> and <em>Object Oriented Programming</em>.</p>

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
      </article>

      {/* <p>I'm baby brunch activated charcoal offal tousled cliche. Gochujang banh mi godard master cleanse gentrify quinoa aesthetic enamel pin. Celiac mlkshk trust fund fingerstache. Next level kinfolk knausgaard, XOXO raclette gluten-free affogato lumbersexual ramps viral raw denim coloring book. Venmo viral everyday carry readymade kogi tattooed. Mlkshk palo santo affogato selvage bicycle rights unicorn bushwick hell of listicle godard. Viral deep v umami, listicle cold-pressed chartreuse chia aesthetic irony polaroid 90's mumblecore sartorial.</p> */}
      {/* <p>Jean shorts venmo vice messenger bag heirloom hexagon single-origin coffee chambray coloring book raw denim bespoke chartreuse neutra yuccie. Cold-pressed hot chicken meditation palo santo, succulents plaid cronut ethical chia lomo pop-up pok pok. Food truck trust fund selfies actually woke jean shorts hella, iceland unicorn. Live-edge austin tumblr intelligentsia authentic.</p> */}
      {/* <p>Dummy text? More like dummy thicc text, amirite?</p> */}
    </div>
  );
}

export default AboutPage;
