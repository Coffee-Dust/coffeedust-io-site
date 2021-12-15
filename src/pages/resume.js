import React from 'react';
import '../assets/css/ResumePage.css'

function ResumePage() {

  return (
    <div className="Page-content Page-resume">

      <h1>my resumé</h1> 
      <a id="Download-resume" href={`/downloads/John Dust Resume.pdf`} download="John Dust Resume"><button className="styled-button-light">
        <img src={require("./../assets/downloadIcon.png").default} alt="" />
        <span>download resume</span>
      </button></a>

      <article className="resume-wrapper">

        <h1>John Dust</h1>
        <section id="contact">
          Knoxville, TN & Willing to relocate | <a href="tel:+8655675032">865-567-5032</a> | <a href="mailto:coffeedust.io@gmail.com">coffeedust.io@gmail.com</a> <br/>
          Personal Website: www.coffeedust.io | <a href="https://github.com/Coffee-Dust">GitHub</a> | <a href="https://www.linkedin.com/in/coffeedust/">LinkedIn</a> <br/>
        </section>

        <section id="intro">
          <h2>Full Stack Software Engineer</h2>
          <hr/>
          <p>Positive, fun and helpful Full Stack Web and iOS Developer with nearly 4 years of independent experience. Background in customer oriented, 5-star tech support, with a passion for solving problems and meeting new people. Writes innovative code that is semantic, organized and efficient. Always thinks ahead to figure out the best, most scalable and efficient solution to a problem. Desires to continue to learn, grow and test skills and knowledge.</p>
        </section>

        <section id="skills">
          <h2>TECHNICAL SKILLS</h2>
          <hr/>
          <p>Javascript ES6, Ruby, Swift, SQL, Ruby on Rails, React, Sinatra, Node JS, Express JS, SequelizeJS, Swift-SpriteKit, REST, MVC Architecture, Database Modeling, Git/Github, Test Driven Development</p>
        </section>

        <section id="projects">
          <h2>TECHNICAL PROJECTS</h2>
          <hr/>

          <h4>Coffee-Beans Social Media - <a href="https://github.com/Coffee-Dust/React-Coffee-Beans">Github</a> | <a href="https://coffeedust.io/projects/coffee_beans">Demo</a></h4>
          <p>A twitter clone where tweets are coffee beans. Users can share pictures, stories, comment on posts and react to both comments and posts alike.</p>
          <ul>
            <li>Built frontend in the React framework with Redux state management pattern.</li>
            <li>Used Redux-Thunk for async data retrieval and state updating.</li>
            <li>Programmed the backend database server in Ruby on Rails using SQLite3 and ActiveRecord with ActiveStorage to
            persist user submitted media.</li>
          </ul>

          <h4>My Coffee Table - <a href="https://github.com/Coffee-Dust/My-Coffee-Table">Github</a> | <a href="https://coffeedust.io/projects/my_coffee_table">Demo</a></h4>
          <p>A single page web application that gives users a space (coffee table) to add, move around and customize pictures, weblinks, text, notes etc.</p>
          <ul>
            <li>Coded the frontend in vanilla ES6 Javascript in an Object Oriented JS paradigm for clear and semantic code organization.</li>
            <li>Designed backend server on Ruby on Rails framework with ActiveRecord responsible for returning and persisting data.</li>
            <li>Modeled out the relational database schema with polymorphic models to reduce code repetition.</li>
          </ul>

          <h4>The 8-bit Master - <a href="https://appadvice.com/app/the-8-bit-master-the-handheld-gaming-console/1213057100">App Store</a> | <a href="https://coffeedust.io/projects/8bit_master">More info</a></h4>
          <p>Published iOS Game that featured a classic gameboy console interface and allowed users to play multiple 8-bit style games.</p>
          <ul>
            <li>Developed in Swift, Spritekit and Objective-C.</li>
            <li>Ability for users to purchase game currency with in-app purchases along with using AdColony SDK for interstitial ads.</li>
            <li>Received a total of 5k+ app unit downloads along with many reviews internationally with an average 4.5 stars overall.</li>
          </ul>
        </section>
        
        <section id="exp">
          <h2>EXPERIENCE</h2>
          <hr/>
          <div className="split">
            <h4>Full Stack Software Engineer</h4> <span>Knoxville, TN (Remote)</span>
          </div>
          <div className="split">
            <span className="desc">Independent - Part time</span> <span>2017 - Present</span>
          </div>
          <ul>
            <li>Developed both frontend and backend features for clients in Ruby on Rails, Sinatra, NodeJS, React.</li>
            <li>Built and contributed to many projects and applications in multiple languages and frameworks.</li>
            <li>Maintained a handful of web applications for clients.</li>
          </ul>

          <div className="split">
            <h4>Flatiron School</h4> <span>Remote</span>
          </div>
          <div className="split">
            <span className="desc">Full Stack Web Development, Ruby on Rails and JavaScript Program</span>
            <span>09/2017 - 05/2021</span>
          </div>
          <ul>
            <li>Built 5 major projects, 4 of which were full stack web apps, 2 single page applications. View them <a href="/projects">here</a>.</li>
            <li>Collaborated with multiple stakeholders while working on projects.</li>
            <li>Assisted students with troubleshooting and debugging.</li>
          </ul>

          <div className="split">
            <h4>iOS Software Engineer</h4> <span>Knoxville, TN (Remote)</span>
          </div>
          <div className="split">
            <span className="desc">Independent - Full time</span> <span>09/2016 - 10/2017</span>
          </div>
          <ul>
            <li>Engineered apps for iPadOS, iOS, tvOS & OSX in Swift & OBJ-C.</li>
            <li>Developed and published The 8-bit Master game that received a total of 5k+ app unit downloads.</li>
          </ul>

        </section>

        <section id="knawledge">
          <h2>EDUCATION</h2>
          <hr/>
          <div className="split">
            <h4>Penn Foster - High School</h4> <span>Knoxville, TN</span>
          </div>
          <br/>
          <div className="split">
            <span className="desc">Electives in Computer Programming/Information Technology, 4.0 GPA</span> <span>07/2016</span>
          </div>
        </section>
      <br/>
      <br/>
      </article>

    </div>
  );
}

export default ResumePage;
