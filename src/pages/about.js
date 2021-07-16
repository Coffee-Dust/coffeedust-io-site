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

        <div>
          <h4>Languages I am well versed in</h4>
          <ul>
            <li>Javascript</li>
            <li>Ruby</li>
            <li>HTML/CSS</li>
            <li>Swift</li>
          </ul>
        </div>

        <div>
          <h4>Experienced in these technologies/frameworks</h4>
          <ul>
            <li>Object Oriented Programming</li>
            <li>Ruby on Rails</li>
            <li>React</li>
            <li>Redux</li>
            <li>(even more...)</li>
          </ul>
        </div>
      </article>

      {/* <p>I'm baby brunch activated charcoal offal tousled cliche. Gochujang banh mi godard master cleanse gentrify quinoa aesthetic enamel pin. Celiac mlkshk trust fund fingerstache. Next level kinfolk knausgaard, XOXO raclette gluten-free affogato lumbersexual ramps viral raw denim coloring book. Venmo viral everyday carry readymade kogi tattooed. Mlkshk palo santo affogato selvage bicycle rights unicorn bushwick hell of listicle godard. Viral deep v umami, listicle cold-pressed chartreuse chia aesthetic irony polaroid 90's mumblecore sartorial.</p> */}
      {/* <p>Jean shorts venmo vice messenger bag heirloom hexagon single-origin coffee chambray coloring book raw denim bespoke chartreuse neutra yuccie. Cold-pressed hot chicken meditation palo santo, succulents plaid cronut ethical chia lomo pop-up pok pok. Food truck trust fund selfies actually woke jean shorts hella, iceland unicorn. Live-edge austin tumblr intelligentsia authentic.</p> */}
      {/* <p>Dummy text? More like dummy thicc text, amirite?</p> */}
    </div>
  );
}

export default AboutPage;
