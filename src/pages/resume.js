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

        <h1>John (Jonathan) Dust</h1>
        <section id="contact">
          Knoxville, TN | <a href="tel:+8655675032">865-567-5032</a> | <a href="mailto:job.opp@john.virtually.coffee">job.opp@john.virtually.coffee</a> <br/>
          Personal Website: john.virtually.coffee | <a href="https://github.com/Coffee-Dust">GitHub</a> | <a href="https://www.linkedin.com/in/coffeedust/">LinkedIn</a> <br/>
        </section>

        <section id="intro">
          <h2>Software Engineer</h2>
          <hr/>
          <p>
            Self-taught, helpful, fun and detail oriented Software Engineer that has been programming for over 6 years combined.<br/>
            Loves to be helpful and work with people hands on. Is passionate about writing reusable, semantic and organized code.<br/>
            Creator of the iOS mobile game, <em>Virtually 8-bit!</em>
          </p>
        </section>

        <section id="skills">
          <h2>TECHNICAL SKILLS</h2>
          <hr/>
          <p>
            <strong>Languages:</strong> Swift, TypeScript/JavaScript, Ruby.<br/>
            <strong>Technologies:</strong> SpriteKit, UIKit, CloudKit, React, Ruby on Rails.
          </p>
        </section>

        <section id="projects">
          <h2>TECHNICAL PROJECTS</h2>
          <hr/>

          <h4>Virtually 8-bit! - <a href="//download.virtually8bit.virtually.coffee">App Store</a> | <a href="https://john.virtually.coffee/projects/virtually_8bit">More info</a></h4>
          <p>Published iOS app/game that features a classic gameboy-like interface and allows users to play multiple 8-bit style games.</p>
          <ul>
            <li>Engineered in a way that separates the Console’s(app’s) ‘hardware’ and ‘software’ systems. That allows for better code management and feature growth. I also built it in a way that allows code to be reused in multiple different games.</li>
            <li>Currently holds 2 playable games inside of it(more on the way), Meteoroids and Bit-Breaker. Meteoroids is an arcade space shooter that features power-ups and player upgradable abilities. Bit-Breaker is a breakout style game with randomly generated levels.</li>
            <li>Features SpriteKit as the physics engine, UIKit for handling ‘virtual-analog’ button touch events as well as all of the console’s UI layout, and CloudKit for persisting user data when connected online, otherwise stores data locally until it can be synced.</li>
          </ul>

          <h4>My Coffee Table - <a href="https://github.com/Coffee-Dust/My-Coffee-Table">Github</a> | <a href="https://john.virtually.coffee/projects/my_coffee_table">Demo</a></h4>
          <p>A single page web application that gives users a space (coffee table) to add, move around and customize elements such as: pictures, web-links, embedded content, text, notes and more.</p>
          <ul>
            <li>Coded the frontend in vanilla ES6 Javascript in an Object Oriented paradigm for clear and semantic code organization.</li>
            <li>Designed backend to be a REST API in Ruby on Rails with ActiveRecord responsible for persisting and querying data. Modeled that relational database with polymorphic associations to reduce code repetition and tested with rspec.</li>
          </ul>

        </section>
        
        <section id="exp">
          <h2>EXPERIENCE</h2>
          <hr/>

          <div className="split">
            <h4>iOS Software Engineer</h4> <span>Knoxville, TN</span>
          </div>
          <div className="split">
            <span className="desc">Virtually.Coffee - Full Time</span> <span>09/2021 - Present</span>
          </div>
          <ul>
            <li>Designed, developed and published <a href="//download.virtually8bit.virtually.coffee">Virtually 8-bit!</a> A full iOS game built in Swift, UIKit, SpriteKit and CloudKit.</li>
            <li>Worked with multiple different frameworks and technologies, both open source and from Apple, such as CocoaPods and the ones mentioned above.</li>
          </ul>

          <div className="split">
            <h4>Lead Part-Time In-Home Tech Expert</h4> <span>Knoxville, TN</span>
          </div>
          <div className="split">
            <span className="desc">Asurion - Part Time</span> <span>10/2020 - 01/2022</span>
          </div>
          <ul>
            <li>Provided hands-on technical support and customer service to 40+ clients per month by delivering and setting up smartphones and troubleshooting technical issues. Consistently rated 5 stars across client experience, with special mention for helpfulness, friendliness and technical knowledge.</li>
          </ul>

          <div className="split">
            <h4>Full Stack Software Engineer</h4> <span>Remote</span>
          </div>
          <div className="split">
            <span className="desc">Independent - Part Time</span> <span>08/2017 - 09/2021</span>
          </div>
          <ul>
            <li>Developed both frontend and backend features for clients on a handful of web applications and projects.</li>
            <li>Programmed and used many technologies such as React, SQL and Ruby on Rails.</li>
            <li>Built 6 major public projects for my portfolio (including my website and project demo server). Most being Single Page Applications or Monolithic Web Apps. View & use them <a href="/projects">here</a>.</li>
          </ul>

          <div className="split">
            <h4>iOS Engineer in Learning</h4> <span>Knoxville, TN</span>
          </div>
          <div className="split">
            <span className="desc">Independent - Full Time</span> <span>05/2016 - 07/2017</span>
          </div>
          <ul>
            <li>Built a handful of smaller applications for iPhone, iPad and tvOS.</li>
            <li>Created and published the iOS game, <a href="https://appadvice.com/app/the-8-bit-master-the-handheld-gaming-console/1213057100" target="_blank"><em>The 8-bit Master</em></a>. Developed using Swift language, and designed all of the UI/UX, graphics, 8-bit artwork and music. It received a total of 5k+ app unit downloads with an average review rating of 4.5 stars overall.</li>
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
            <span className="desc">Electives in Computer Programming/Information Technology, 4.0 GPA</span> <span>2016</span>
          </div>
        </section>
      <br/>
      <br/>
      </article>

    </div>
  );
}

export default ResumePage;
