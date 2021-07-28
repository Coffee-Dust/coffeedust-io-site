import React from 'react';
import '../assets/css/ResumePage.css'

function ResumePage() {
  

  return (
    <div className="Page-content">
      <h1>my resumé</h1>

      <article className="resume-wrapper">

        <h1>John Dust</h1>
        Knoxville, TN & Willing to relocate | 865-567-5032 | coffeedust.io@gmail.com <br/>
        Personal Website: www.coffeedust.io | GitHub | LinkedIn<br/>

        <h2>Full Stack Web Software Engineer</h2>
        <hr/>
        <p>Experienced in Javascript and Ruby on Rails based programming with a background in customer oriented, 5-star tech support. Writes innovative code that is clean, semantic, well engineered and efficient. Thinks ahead to figure out the best solution to a problem. Positive, fun and helpful person, always goes the extra mile to accomplish the task at hand.</p>

        <h2>TECHNICAL SKILLS</h2>
        <hr/>
        <p>Ruby, Ruby on Rails, Javascript, JS ES6, React, Redux, SQL, Database Modeling, ActiveRecord, CSS 3/HTML 5, Sinatra, Git/Github, Swift, Swift-SpriteKit</p>

        <h2>TECHNICAL PROJECTS</h2>
        <hr/>
        
        <h4>Coffee-Beans Social Media - <a href="">Github</a> | <a href="">Demo</a></h4>
        <p>A twitter clone where tweets are coffee beans. Users can share pictures, stories, comment on posts and react to both comments and posts alike.</p>
        <ul>
          <li>Built frontend in the React framework with Redux state management pattern.</li>
          <li>Used Redux-Thunk for async data retrieval and state updating.</li>
          <li>Programmed the backend database server in Ruby on Rails using SQLite3 and ActiveRecord with ActiveStorage to
          persist user submitted media.</li>
        </ul>

        <h4>My Coffee Table - <a href="">Github</a> | <a href="">Demo</a></h4>
        <p>A single page web application that gives users a space (coffee table) to add, move around and customize pictures, weblinks, text, notes etc.</p>
        <ul>
          <li>Coded the frontend in vanilla ES6 Javascript in an Object Oriented JS paradigm for clear and semantic code organization.</li>
          <li>Designed backend server on Ruby on Rails framework with ActiveRecord responsible for returning and persisting data.</li>
          <li>Modeled out the relational database schema with polymorphic models to reduce code repetition.</li>
        </ul>

        <h4>Inventory Manager - <a href="">Github</a> | <a href="">Demo</a></h4>
        <p>Command line interface app that allows you to view low inventory, add inventory, keep track of orders and much more.</p>
        <ul>
          <li>Engineered in vanilla Ruby without any frameworks, SQL or ORM’s but instead organizes and saves data in a single JSON file then parses that data into ruby class instances.</li>
          <li>Used the Nokogiri Gem to build a Scraper that seeds the JSON file with data from grocery store websites.</li>
          <li>Allowed users to Create, Read, Update and Delete items from memory and then save them to a JSON file.</li>
        </ul>

        <h2>EXPERIENCE</h2>
        <hr/>
        <div className="split">
          <h4>Asurion</h4> <span>Knoxville, TN</span>
        </div>
        <div className="split">
          <span className="desc">Asurion Expert - Part time</span>
          <span>10/2020 - Present</span>
        </div>
        <ul>
          <li>Providing hands-on technical support and customer service to 40+ clients per month by delivering and setting up
          smartphones and troubleshooting technical issues. Consistently rated 5 stars across client experience, special mention for helpfulness and technical knowledge.</li>
        </ul>

        <div className="split">
          <h4>Instacart</h4> <span>Knoxville, TN</span>
        </div>
        <div className="split">
          <span className="desc">Full Service Shopper</span> <span>04/2020 - 10/2020</span>
        </div>
        <ul>
          <li>Provided clients with excellent experiences by finding the best quality items in an agile, timely and efficient manner. Continuously improved outcomes by applying excellent communication and collaboration skills along with detail-oriented organization, planning and testing.</li>
        </ul>
        
        <h2>EDUCATION</h2>
        <hr/>
        <div className="split">
          <h4>Flatiron School</h4><span>Knoxville, TN</span>
        </div>
        <br/>
        <div className="split">
          <span className="desc">Full Stack Web Development, Ruby on Rails and JavaScript Program</span> <span>01/2019 - 06/2021</span>
        </div>
        <br/>
        <br/>
        <br/>
        <div className="split">
          <h4>Penn Foster - High School</h4> <span>Knoxville, TN</span>
        </div>
        <br/>
        <div className="split">
          <span className="desc">Electives in Computer Programming/Information Technology, 4.0 GPA</span> <span>07/2016</span>
        </div>

      </article>

    </div>
  );
}

export default ResumePage;
